import React, { useState, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import { ModelContext } from "./detection/context/model-context";
import Selector from "./detection/utils/Selector";
import LoadingSpinner from "./detection/utils/LoadingSpinner";

const MODEL_URL = process.env.PUBLIC_URL + "/detection/";
const LABELS_URL = MODEL_URL + "labels.json";
const MODEL_JSON = MODEL_URL + "model.json";

const Detect = () => {
  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");

  const fetchModel = useCallback((model) => {
    setModel(model);
  }, []);

  const fetchLabels = useCallback((labels) => {
    setLabels(labels);
  }, []);

  const selectMode = useCallback((selected) => {
    setSelected(selected);
  }, []);

  const preprocessImage = (image) => {
    const tensor = tf.browser
      .fromPixels(image)
      .toFloat()
      .expandDims(0) // Add batch dimension
      .div(tf.scalar(255.0)); // Normalize pixel values to [0, 1]
    return tensor;
  };

  const runDetection = async (image) => {
    if (!model) {
      console.error("Model is not loaded yet");
      return;
    }

    try {
      const tensor = preprocessImage(image);
      console.log("Preprocessed Image Tensor:", tensor);

      const predictions = await model.executeAsync({ image_tensor: tensor });
      console.log("Detection results:", predictions);
      // Process and display results here...
    } catch (error) {
      console.error("Error during model execution:", error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        runDetection(img);
      };
    };

    reader.readAsDataURL(file);
  };

  const loadModel = async () => {
    setLoading(true);
    try {
      const savedModel = localStorage.getItem("animal_detector");
      const savedLabels = localStorage.getItem("animal_detector_labels");
      if (savedModel && savedLabels) {
        const model = await tf.loadGraphModel("indexeddb://animal_detector");
        const labels_json = JSON.parse(savedLabels);
        fetchModel(model);
        fetchLabels(labels_json);
        console.log("saved animal detector found");
      } else {
        const model = await tf.loadGraphModel(MODEL_JSON);
        fetchModel(model);
        const response = await fetch(LABELS_URL);
        const labels_json = await response.json();
        fetchLabels(labels_json);
        localStorage.setItem("animal_detector", true);
        await model.save("indexeddb://animal_detector");
        localStorage.setItem(
          "animal_detector_labels",
          JSON.stringify(labels_json)
        );
        console.log("Model and labels loaded for the first time");
      }
    } catch (error) {
      console.error("Error loading model or labels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModelContext.Provider
      value={{
        model: model,
        fetchModel: fetchModel,
        labels: labels,
        fetchLabels: fetchLabels,
        selected: selected,
        selectMode: selectMode,
      }}
    >
      <div className="header-div">
        <p className="demo-title">Animal Detection</p>
        <p
          style={{
            marginTop: "10px",
          }}
        >
          This system utilizes the SSD + MobileNetV2 model, pretrained on the
          COCO dataset, for efficient object detection
        </p>
      </div>
      <div>
        {model ? (
          <div>
            <Selector runDetection={runDetection} />
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type="file"
                accept="image/jpeg, image/png, .jpg, .jpeg, .png"
                id="file-upload"
                onChange={handleFileUpload}
                style={{ display: "none" }} // Hide default input
              />
            </div>
          </div>
        ) : (
          <div className="center-div load-div">
            {loading ? (
              <div style={{ textAlign: "center" }}>
                <LoadingSpinner />
                <p style={{ color: "#950740", fontWeight: "500" }}>
                  Loading Model. Please wait a few seconds...
                </p>
              </div>
            ) : (
              <button
                className="css-btn"
                style={{ width: "60%" }}
                onClick={loadModel}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Launch WildGuard
                </div>
                <div style={{ fontSize: "12px", fontWeight: "500" }}>
                  Species Explorer
                </div>
              </button>
            )}
          </div>
        )}
      </div>
    </ModelContext.Provider>
  );
};

export default Detect;
