import { motion } from "framer-motion";

const LineChart = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-20 flex items-center justify-center">
        <div className="text-gray-500 text-sm">No chart data available</div>
      </div>
    );
  }

  const maxPoints = Math.max(...data.map((d) => d.points));
  const minPoints = Math.min(...data.map((d) => d.points));
  const range = maxPoints - minPoints || 1;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 320;
      const y = 80 - ((d.points - minPoints) / range) * 60;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="w-full h-20 relative">
      <svg width="320" height="80" className="w-full h-full">
        <defs>
          <linearGradient
            id="chartLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#0099ff" />
          </linearGradient>
          <linearGradient
            id="chartAreaGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0099ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Area under curve */}
        <motion.path
          d={`M0,80 L${points} L320,80 Z`}
          fill="url(#chartAreaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* Main line */}
        <motion.polyline
          fill="none"
          stroke="url(#chartLineGradient)"
          strokeWidth="3"
          points={points}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Glow effect */}
        <motion.polyline
          fill="none"
          stroke="url(#chartLineGradient)"
          strokeWidth="6"
          points={points}
          opacity="0.3"
          filter="blur(2px)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default LineChart;
