import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();
  const phi = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: parent.offsetWidth * 2,
      height: parent.offsetHeight * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.3, 0.1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [22.57, 88.36], size: 0.1 },
        { location: [40.71, -74.0], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi.current;
        phi.current += 0.005;
      },
    });

    const handleResize = () => {
      globe.resize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
};

export default Globe;
