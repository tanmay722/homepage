import React, { useEffect, useState } from "react";
import finqualitylogoo from "../Images/finqualitylogoo.png";
import tiltedCardsvg from "../Images/tiltedCardsvg.svg";
import TiltedCard from "../TiltedCard/TiltedCard";
import "./ProductOverView.css";
import LightRays from "../LightRays/LightRays";

const useLogoRipple = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 200);

    const interval = setInterval(() => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return { isActive };
};

const ProductOverView = () => {
  const { isActive } = useLogoRipple();

  return (
    <>
      <div className="finaquity-section">
        <div style={{ width: "100%", height: "500px" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#757373ff"
            raysSpeed={1.1}
            lightSpread={0.8}
            rayLength={1.2}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0}
            className="custom-rays"
          />
          <div className="finaquity-content">
            <div className="logo-container">
              <img src={finqualitylogoo} alt="Logo" className="logo" />

              <div className="logo-ripple-container">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="logo-ripple-ring"
                    style={{
                      animation: `logoRippleWave 4s infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              <div className="logo-glow" />
            </div>

            <p className="product-overview">⭐ Product Overview</p>
            <h1 className="main-heading">Finaquity at a Glance</h1>
            <p className="subtext">
              Your AI-Powered Trading Hub—Expert Mentorship, Smart Insights &
              Risk-Controlled Investing, All in One Place.
            </p>
          </div>
        </div>
        <div className="tilted">
          <TiltedCard
            imageSrc={tiltedCardsvg}
            altText="tiltedCard"
            containerHeight="600px"
            containerWidth="1200px"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={9}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </>
  );
};

export default ProductOverView;
