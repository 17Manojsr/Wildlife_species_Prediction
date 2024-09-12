// ServiceSection.js
import React from "react";
import "./ServiceSection.css"; // Import the corresponding CSS

// Define the ServiceSection component
function ServiceSection() {
  return (
    <div>
      <section className="service" id="service">
        <div
          className="container"
          style={{
            backgroundColor: "#DDFFF7",
            paddingTop: "50px",
            paddingBottom: "60px",
          }}
        >
          <p className="service-section-subtitle">
            <img
              src="/assets/subtitle-img-green.png"
              width={32}
              height={7}
              alt="Wavy line"
            />
            <span>What We Offer</span>
          </p>
          <h2 className="deco-title">
            We Work Differently to <strong>keep The World Safe</strong>
          </h2>
          <div className="service-content">
            <div className="service-item">
              <div className="service-icon">🌿</div>
              <h3 className="service-title">Wildlife Conservation</h3>
              <p className="service-text">
                We focus on conserving wildlife through various initiatives
                aimed at protecting their natural habitats.
              </p>
              <a href="https://example.com" className="read-more">
                Read More
              </a>
            </div>
            <div className="service-item">
              <div className="service-icon">📚</div>
              <h3 className="service-title">Environmental Education</h3>
              <p className="service-text">
                Our educational programs aim to raise awareness and inspire
                communities to participate in wildlife conservation.
              </p>
              <a href="https://example.com" className="read-more">
                Read More
              </a>
            </div>
            <div className="service-item">
              <div className="service-icon">🤝</div>
              <h3 className="service-title">Community Involvement</h3>
              <p className="service-text">
                Engaging local communities in conservation efforts is key to our
                success in preserving biodiversity.
              </p>
              <a href="https://example.com" className="read-more">
                Read More
              </a>
            </div>
            <div className="service-item">
              <div className="service-icon">🔬</div>
              <h3 className="service-title">Research and Innovation</h3>
              <p className="service-text">
                We invest in research and innovative technologies to advance
                conservation methods and practices.
              </p>
              <a href="https://example.com" className="read-more">
                Read More
              </a>
            </div>
            <div className="service-item">
              <div className="service-icon">🌳</div>
              <h3 className="service-title">Reforestation Projects</h3>
              <p className="service-text">
                We lead reforestation projects to restore degraded forests and
                promote sustainable land use.
              </p>
              <a href="https://example.com" className="read-more">
                Read More
              </a>
            </div>
            <div className="service-item">
              <div className="service-icon">🌎</div>
              <h3 className="service-title">Climate Action</h3>
              <p className="service-text">
                We drive climate action initiatives to reduce carbon footprints
                and mitigate global warming.
              </p>
              <a href="https://example.com" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
