import React, { useState } from "react";
import "./Portfolio.css";
import Squares from "../Squares/Squares";
import Slack from "../Images/slack.png";
import Audible from "../Images/audible.jpg";
import Evernote from "../Images/evernote.png";
const Portfolio = () => {
  const [toggleStates, setToggleStates] = useState({
    slack: false,
    audible: true,
    evernote: false,
  });

  const handleToggle = (service) => {
    setToggleStates((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const toggleItems = [
    {
      id: "slack",
      icon: (
        <div className="icon-container">
          <img src={Slack} alt="Slack" className="icon-image" />
        </div>
      ),
      isActive: toggleStates.slack,
    },
    {
      id: "audible",
      icon: (
        <div className="icon-container">
          <img src={Audible} alt="Audible" className="icon-image" />
        </div>
      ),
      isActive: toggleStates.audible,
    },
    {
      id: "evernote",
      icon: (
        <div className="icon-container">
          <img src={Evernote} alt="Evernote" className="icon-image" />
        </div>
      ),
      isActive: toggleStates.evernote,
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Squares
        speed={0.5}
        squareSize={25}
        direction="right" // up, down, left, right, diagonal
        borderColor="rgba(82, 8, 86, 1)"
        hoverFillColor="#222"
      />
      <div className="dashboard-container">
        <div className="port-cards-container_1">
          <div className="toggles-wrapper">
            {toggleItems.map((item) => (
              <div key={item.id} className="toggle-card">
                <div className="toggle-content">
                  {/* Icon */}
                  <div className="icon-wrapper">{item.icon}</div>

                  {/* Progress bar */}
                  <div className="progress-wrapper">
                    <div className="progress-track">
                      <div
                        className={`progress-fill ${
                          item.isActive ? "active" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`toggle-switch-protfolio ${
                      item.isActive ? "active" : ""
                    }`}
                  >
                    <span className="toggle-thumb"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
