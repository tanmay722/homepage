import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AreaChart({ data, color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Find min and max values
    const max = Math.max(...data) * 1.1;
    const min = Math.min(...data) * 0.9;

    // Draw the area
    ctx.beginPath();
    ctx.moveTo(0, height);

    // Draw the line
    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / (max - min)) * height;
      ctx.lineTo(x, y);
    });

    // Complete the area
    ctx.lineTo(width, height);
    ctx.closePath();

    // Fill with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);

    if (color === "teal") {
      gradient.addColorStop(0, "rgba(45, 212, 191, 0.5)");
      gradient.addColorStop(1, "rgba(45, 212, 191, 0.0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw the line
      ctx.beginPath();
      data.forEach((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / (max - min)) * height;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = "rgba(45, 212, 191, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (color === "pink") {
      gradient.addColorStop(0, "rgba(236, 72, 153, 0.5)");
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw the line
      ctx.beginPath();
      data.forEach((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / (max - min)) * height;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = "rgba(236, 72, 153, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (color === "green") {
      gradient.addColorStop(0, "rgba(34, 197, 94, 0.5)");
      gradient.addColorStop(1, "rgba(34, 197, 94, 0.0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw the line
      ctx.beginPath();
      data.forEach((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / (max - min)) * height;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = "rgba(34, 197, 94, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [data, color]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full"
    >
      <canvas
        ref={canvasRef}
        width={300}
        height={100}
        className="w-full h-full"
      />
    </motion.div>
  );
}
