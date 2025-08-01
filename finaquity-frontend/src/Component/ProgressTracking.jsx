import React from "react";
import "./ProgressTracking.css";
import timelineImage from "../Images/Teacher.svg";
import MentorMarquee from "./MentorMarquee";
const ProgressTracking = () => {
  return (
    <div className="progress-tracking-container">
      <div className="left-section">
        <h4 className="tagline">📈 Progress Tracking</h4>
        <h1 className="main-heading">
          Monitor Progress <br /> Faster Than Ever.
        </h1>
        <p className="subtext_">
          Instantly access real-time updates to track project progress and make
          <br />
          quick adjustments.
        </p>
        <div className="stats">
          <div className="stat-block">
            <h2>100%</h2>
            <p>Increase in Progress Tracking</p>
          </div>
          <div className="divider" />
          <div className="stat-block">
            <h2>10X</h2>
            <p>Increase in Productivity</p>
          </div>
        </div>
        <div className="button-trial">
          <button className="cta-button-progress">Start your free trial</button>
        </div>
      </div>

      <div className="right-section">
        <img
          src={timelineImage}
          alt="Project Timeline"
          className="timeline-image"
        />
        <div className="overlay">
          <MentorMarquee />
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
