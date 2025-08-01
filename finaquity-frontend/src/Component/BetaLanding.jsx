import React, { useState } from "react";
import "./BetaLanding.css";
import DotGrid from "../DotGrid/DotGrid";

const BetaLanding = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
      // Handle form submission here
    }
  };

  return (
    <div className="beta-landing">
      <div className="beta-wrapper">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <DotGrid
            dotSize={5}
            gap={10}
            baseColor="#414043ff"
            activeColor="#5227FF"
            proximity={70}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
          {/* Content Container */}
          <div className="content-container">
            {/* Free Trial Badge */}
            <div className="trial-badge">
              <div className="pulse-dot"></div>
              <span className="trial-text">Free Trial</span>
            </div>

            {/* Main Heading */}
            <h1 className="main-heading">We are in Beta Phase</h1>

            {/* Subtitle */}
            <p className="subtitle">
              Start your free trial now to experience seamless project
              management without any commitment!
            </p>

            {/* Email Form */}
            <div className="email-form">
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                />
                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`get-started-btn- ${isHovered ? "hovered" : ""}`}
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Feature Points */}
            <div className="feature-points">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span className="feature-text">All-free</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span className="feature-text">No card/cash required</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span className="feature-text">Cancel anytime</span>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="stats-grid">
              {/* Pro Users Card */}
              <div className="stat-card">
                <div className="stat-number">76%</div>
                <div className="stat-label">Pro Users</div>
              </div>

              {/* Task Organized Card */}
              <div className="stat-card">
                <div className="stat-number">12M+</div>
                <div className="stat-label">Task Organized</div>
              </div>

              {/* Team Members Card */}
              <div className="stat-card">
                <div className="stat-number">600+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaLanding;
