import React, { useEffect, useState } from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, Cell } from "recharts";

const initialData = [{ value: 2 }, { value: 4 }, { value: 6 }, { value: 9 }];

const colors = ["#3498db", "#9b59b6", "#2ecc71", "#de0606ff"];

const getRandomData = () => {
  return initialData.map(() => ({
    value: Math.floor(Math.random() * 10),
  }));
};

const MyBarChart = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getRandomData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "50px", height: "6px", maxHeight: "7px" }}>
      <ResponsiveContainer width="100%" height={50}>
        <BarChart data={data} barGap={200}>
          {/* <Tooltip /> */}
          <Bar dataKey="value" animationDuration={1000}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
