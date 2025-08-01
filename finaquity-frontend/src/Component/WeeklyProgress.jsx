import React from "react";
import { MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react";
import "./WeeklyProgress.css";
import Squares from "../Squares/Squares";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function WeeklyProgress() {
  // Dummy data
  const progress = 75;
  const increase = 6.4;
  const title = "Weekly Progress";
  const subtitle = "Last week";
  const progressBars = [
    { value: 80, color: "gray" },
    { value: 60, color: "purple" },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Squares
        speed={0.5}
        squareSize={25}
        direction="left" // up, down, left, right, diagonal
        borderColor="rgba(82, 8, 86, 1)"
        hoverFillColor="#222"
      />
      <div className="weekly-progress-container">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <h2 className="title">{title}</h2>
            <button className="menu-button">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div>
            <p className="subtitle-progress">{subtitle}</p>
          </div>
        </div>

        <div className="content">
          {/* Circular Progress */}
          <div
            className="circular-progress"
            style={{ width: 120, height: 120 }}
          >
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0.5,
                pathColor: "#c084fc",
                textColor: "#ffffff",
                trailColor: "#4c1d95",
                textSize: "20px",
              })}
            />
          </div>

          {/* Progress bars and stats */}
          <div className="stats-section">
            {/* Progress bars */}
            <div className="progress-bars">
              {progressBars.map((bar, index) => (
                <div key={index} className="progress-bar-item">
                  <div
                    className={`progress-dot ${
                      bar.color === "purple" ? "dot-purple" : "dot-gray"
                    }`}
                  ></div>
                  <div className="progress-bar-track">
                    <div
                      className={`progress-bar-fill ${
                        bar.color === "purple" ? "fill-purple" : "fill-gray"
                      }`}
                      style={{ width: `${bar.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Increase indicator */}
            <div className="increase-indicator">
              <span
                className={`increase-value ${
                  increase >= 0 ? "positive" : "negative"
                }`}
              >
                {increase >= 0 ? "+" : "-"}
                {increase}%
              </span>
              <div
                className="info-icon"
                style={{ color: increase >= 0 ? "#4ade80" : "#f87171" }}
              >
                {increase >= 0 ? (
                  <ArrowUp size={12} />
                ) : (
                  <ArrowDown size={12} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
