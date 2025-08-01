import React, { useState, useEffect } from "react";
import Globe from "./Globe";
import "./Connect.css";
import Particles from "../Particles/Particles";

const Connect = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container">
      {/* Text Content */}
      <div className="content-overlay">
        <div className={`main-content ${isLoaded ? "fade-in" : ""}`}>
          <h1 className="main-title">
            Connecting Live
            <br />
            Market Genomics
          </h1>
          <button className="get-started-btn-globe">Get started</button>

          <div className="globe-container">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
