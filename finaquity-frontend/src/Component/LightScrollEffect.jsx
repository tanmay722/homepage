// LightScrollEffect.jsx
import React, { useEffect, useState } from "react";
import "./LightScrollEffect.css";

const LightScrollEffect = () => {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxDepth = 300;
      setDepth(Math.min(scrollY, maxDepth));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generatePath = (depth) => {
    // Centered U-shape path
    const viewWidth = 1000;
    const glowWidth = 400;
    const left = (viewWidth - glowWidth) / 2; // 300
    const right = left + glowWidth; // 700

    return `
      M ${left} 0
      C ${left} ${depth}, ${right} ${depth}, ${right} 0
      L ${right} 0
      Z
    `;
  };

  return (
    <svg
      className="curved-light"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
    >
      {/* <path d={generatePath(depth)} fill="white" opacity="5" />
      <path
        d={generatePath(depth)}
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path d={generatePath(depth)} fill="white" opacity="0.8" /> */}
      <rect x="200" y="50" width="800" height="20" fill="white" />
    </svg>
  );
};

export default LightScrollEffect;
