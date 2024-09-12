import React, { useState, useEffect } from "react";
import "./App.css";
import "./detect.css";
import { IonIcon } from "@ionic/react";
import {
  shieldCheckmarkOutline,
  waterOutline,
  leafOutline,
  snowOutline,
  menuOutline,
  closeOutline,
  heartOutline,
} from "ionicons/icons";
import SearchIcon from "./components/SearchIcon";
import Detection from "./components/Detection";
import ServiceSection from "./components/ServiceSection";
import DonateSection from "./components/DonateSection";

function App() {
  const [headerBackground, setHeaderBackground] = useState("transparent");
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        setHeaderBackground("hsl(0, 0%, 13%)");
      } else {
        setHeaderBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="header" style={{ backgroundColor: headerBackground }}>
        <div className="container">
          <h1>
            <a href="/" className="logo">
              Wildguard
            </a>
          </h1>
          <select name="language" className="lang-switch">
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            onClick={() => setNavOpen(true)}
          >
            <IonIcon icon={menuOutline} />
          </button>
          <nav className={`navbar ${navOpen ? "open" : ""}`}>
            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              onClick={() => setNavOpen(false)}
            >
              <IonIcon icon={closeOutline} />
            </button>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#service" className="navbar-link">
                  <span>Service</span>
                </a>
              </li>
              <li>
                <a href="#donate" className="navbar-link">
                  <span>Donate</span>
                </a>
              </li>
              <li>
                <a href="#event" className="navbar-link">
                  <span>Event</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-action">
            <SearchIcon width="35px" height="35px" />
            <button className="btn btn-primary">
              <span>
                <b>Donation </b>
              </span>
              <IonIcon icon={heartOutline} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <p className="section-subtitle">
                <img
                  src="/assets/subtitle-img-white.png"
                  width={32}
                  height={7}
                  alt="Wavy line"
                />
                <span style={{ fontSize: "2rem", fontWeight: 500 }}>
                  Welcome to Wildguard
                </span>
              </p>
              <h2
                className="h1 hero-title"
                style={{ fontSize: "3.5rem", fontWeight: 300 }}
              >
                Give Love for Saving <strong> World Animals</strong>
              </h2>
              <p
                className="hero-text"
                style={{ fontSize: "1.8rem", fontWeight: 300 }}
              >
                We are dedicated to protecting and preserving wildlife through
                advanced predictive technologies.
              </p>
              <button
                className="btn btn-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "hsl(86, 45%, 54%)",
                  color: "#fff",
                  border: "none",
                  padding: "20px 40px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                <span
                  style={{
                    marginRight: "5px",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  Donation ♡
                </span>
              </button>
            </div>
          </section>

          <section className="section features">
            <div className="container">
              <ul className="features-list">
                <li className="features-item">
                  <div className="item-icon">
                    <IonIcon icon={shieldCheckmarkOutline} />
                  </div>
                  <div>
                    <h3 className="h4 item-title">Safe Shelter</h3>
                    <p className="item-text">
                      We prioritize providing safe shelter for wildlife species
                    </p>
                  </div>
                </li>
                <li className="features-item">
                  <div className="item-icon">
                    <IonIcon icon={waterOutline} />
                  </div>
                  <div>
                    <h3 className="h4 item-title">Safe Water</h3>
                    <p className="item-text">
                      We work diligently to safeguard water sources
                    </p>
                  </div>
                </li>
                <li className="features-item">
                  <div className="item-icon">
                    <IonIcon icon={leafOutline} />
                  </div>
                  <div>
                    <h3 className="h4 item-title">Ecology Save</h3>
                    <p className="item-text">
                      Protecting ecology is at the heart of our mission
                    </p>
                  </div>
                </li>
                <li className="features-item">
                  <div className="item-icon">
                    <IonIcon icon={snowOutline} />
                  </div>
                  <div>
                    <h3 className="h4 item-title">Environment</h3>
                    <p className="item-text">
                      Preserving the environment is key to sustaining life on
                      Earth
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      <section className="additional-section">
        <div
          className="container"
          style={{
            backgroundColor: "#fff",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <div className="about-banner">
            <div className="banner-row">
              <div className="banner-col">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/about-banner-1.jpg`}
                  width="315"
                  height="380"
                  loading="lazy"
                  alt="Tiger"
                  className="about-img w-100"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/about-banner-3.jpg`}
                  width="250"
                  height="277"
                  loading="lazy"
                  alt="Elephant"
                  className="about-img about-img-3 w-100"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/about-banner-2.jpg`}
                  width="386"
                  height="250"
                  loading="lazy"
                  alt="Panda"
                  className="about-img about-img-2 w-100"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/about-banner-4.jpg`}
                  width="315"
                  height="380"
                  loading="lazy"
                  alt="Deer"
                  className="about-img w-100"
                />
              </div>
              <div className="banner-col content-col">
                <h2 className="deco-title">About Us</h2>
                <div className="about-content">
                  <p className="section-subtitle">
                    <img
                      src="/assets/subtitle-img-green.png"
                      width={32}
                      height={7}
                      alt="Wavy line"
                    />
                    <span>Why Choose Us</span>
                  </p>
                  <h2 className="h2 section-title">
                    Raise Your Hand to Save <strong>World Animals Life</strong>
                  </h2>
                  <ul className="tab-nav">
                    <li>
                      <button
                        className={`tab-btn ${
                          activeTab === "mission" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("mission")}
                      >
                        Our Mission
                      </button>
                    </li>
                    <li>
                      <button
                        className={`tab-btn ${
                          activeTab === "vision" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("vision")}
                      >
                        Our Vision
                      </button>
                    </li>
                    <li>
                      <button
                        className={`tab-btn ${
                          activeTab === "plan" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("plan")}
                      >
                        Next Plan
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {activeTab === "mission" && (
                      <p className="section-text">
                        Our mission is to protect wildlife by integrating
                        advanced predictive technologies and fostering community
                        awareness and engagement.
                      </p>
                    )}
                    {activeTab === "vision" && (
                      <p className="section-text">
                        Our vision is a world where wildlife thrives in
                        well-preserved natural habitats, and future generations
                        inherit a planet rich in biodiversity.
                      </p>
                    )}
                    {activeTab === "plan" && (
                      <p className="section-text">
                        Our next plan involves expanding our conservation
                        efforts globally, building stronger networks with local
                        communities, and innovating further in predictive
                        analytics for wildlife protection.
                      </p>
                    )}
                  </div>
                  <div class="charity-cards">
                    <div class="charity-content">
                      <div class="icons8-checkmark"></div>
                      <span>
                        {" "}
                        Charity For Foods<br></br>
                      </span>
                      <div class="icons8-checkmark"></div>
                      <span>
                        {" "}
                        Charity For Water<br></br>
                      </span>
                      <div class="icons8-checkmark"></div>
                      <span>
                        {" "}
                        Charity For Medical<br></br>
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "hsl(86, 45%, 54%)",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "background-color 0.3s, color 0.3s",
                      marginTop: "30px",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "5px",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                      }}
                    >
                      Learn More Us ♡
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div
          className="container"
          style={{
            background: "#ffefba",
          }}
        >
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="section-title">324+ Trusted Global Partners</h2>
              <button className="btn btn-outline">
                <span>Become a Partner ♡</span>
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <figure className="cta-banner">
              <img
                src="/assets/cta-banner.jpg"
                width="530"
                height="250"
                loading="lazy"
                alt="Fox"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="detect">
        <div
          className="container"
          style={{
            backgroundColor: "#EEEEEE",
            paddingTop: "50px",
            paddingBottom: "240px",
          }}
        >
          <div style={{ marginTop: "100px", marginBottom: "50px" }}>
            <Detection />
          </div>
          <ServiceSection />
          <DonateSection />
        </div>
      </section>
    </div>
  );
}

export default App;
