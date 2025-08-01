import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const rawData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 190 },
  { name: "May", value: 200 },
  { name: "Jun", value: 300 },
  { name: "Jul", value: 270 },
  { name: "Aug", value: 350 },
];

const AnimatedLineChart = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: 110 }}>
      <ResponsiveContainer>
        <LineChart data={rawData} key={animationKey}>
          <XAxis dataKey="name" />
          {/* <YAxis /> */}

          <Line
            type="linear"
            dataKey="value"
            stroke="#7c0f70ff"
            strokeWidth={2}
            animationDuration={1000}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedLineChart;
