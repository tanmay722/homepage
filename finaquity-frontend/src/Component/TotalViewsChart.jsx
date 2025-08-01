import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./TotalViewsChart.css";
import Squares from "../Squares/Squares";

const data = [
  { name: "M", views: 90 },
  { name: "T", views: 60 },
  { name: "W", views: 80 },
  { name: "T", views: 100 },
  { name: "F", views: 60 },
  { name: "S", views: 30 },
  { name: "S", views: 75 },
];

const TotalViewsChart = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Squares
        speed={0.5}
        squareSize={25}
        direction="left"
        borderColor="rgba(82, 8, 86, 1)"
        hoverFillColor="#222"
      />
      <div className="total-views-container">
        <div className="total-views-header">
          <span className="total-views-title">Total Views</span>
          <div className="total-views-controls">
            <div className="total-views-pill"></div>
            <div className="total-views-dropdown-icon">▼</div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data} barSize={15}>
            <CartesianGrid stroke="transparent" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              stroke="#a29bfe"
            />
            <CartesianGrid
              strokeDasharray="0"
              stroke="#c0b7b7ff"
              strokeOpacity={0.5}
              vertical={false}
              horizontal={true}
            />
            <YAxis hide />
            <Bar dataKey="views" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? "#a29bfe" : "#c084fc"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalViewsChart;
