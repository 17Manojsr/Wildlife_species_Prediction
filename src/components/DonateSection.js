import React from "react";
import "./DonateSection.css";

function DonateSection() {
  // Data for donation cards
  const donationData = [
    {
      imgSrc: "/assets/donate-1.jpg",
      altText: "Elephant",
      raised: 256,
      progress: 83,
      goal: 34562,
      raisedAmount: 562,
      toGo: 864,
    },
    {
      imgSrc: "/assets/donate-2.jpg",
      altText: "Rhino",
      raised: 256,
      progress: 83,
      goal: 34562,
      raisedAmount: 562,
      toGo: 864,
    },
    {
      imgSrc: "/assets/donate-3.jpg",
      altText: "Tiger",
      raised: 256,
      progress: 83,
      goal: 34562,
      raisedAmount: 562,
      toGo: 864,
    },
    {
      imgSrc: "/assets/donate-4.jpg",
      altText: "Koala",
      raised: 256,
      progress: 83,
      goal: 34562,
      raisedAmount: 562,
      toGo: 864,
    },
  ];

  return (
    <section className="section donate" id="donate">
      <div className="container">
        <h2 className="card-title">Raise Hand To Save Animals</h2>
        <ul className="donate-list">
          {donationData.map((data, index) => (
            <li key={index}>
              <div className="donate-card">
                <figure className="card-banner">
                  <img
                    src={data.imgSrc}
                    width="520"
                    height="325"
                    loading="lazy"
                    alt={data.altText}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <div className="progress-wrapper">
                    <p className="progress-text">
                      <span>Raised</span>
                      <data value={data.raised}>${data.raised}</data>
                    </p>
                    <data className="progress-value" value={data.progress}>
                      {data.progress}%
                    </data>
                  </div>
                  <div className="progress-box">
                    <div
                      className="progress"
                      style={{ width: `${data.progress}%` }}
                    ></div>
                  </div>
                  <h3 className="h3 card-title">Raise Hand To Save Animals</h3>
                  <div className="card-wrapper">
                    <p className="card-wrapper-text">
                      <span>Goal</span>
                      <data className="green" value={data.goal}>
                        ${data.goal}
                      </data>
                    </p>
                    <p className="card-wrapper-text">
                      <span>Raised</span>
                      <data className="yellow" value={data.raisedAmount}>
                        ${data.raisedAmount}
                      </data>
                    </p>
                    <p className="card-wrapper-text">
                      <span>To Go</span>
                      <data className="cyan" value={data.toGo}>
                        ${data.toGo}
                      </data>
                    </p>
                  </div>
                  <button className="btn btn-secondary">
                    <span>Donation</span> ♡
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DonateSection;
