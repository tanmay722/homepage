import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./AutomatedGraph.css";
import Squares from "../Squares/Squares";
import { Zap } from "lucide-react";
const data = [
  { name: "Sun", value: 30 },
  { name: "Mon", value: -4 },
  { name: "Tue", value: 28 },
  { name: "Wed", value: 52 },
  { name: "Thr", value: 38 },
  { name: "Fri", value: -2 },
  { name: "Sat", value: 42 },
];

const AutomatedGraph = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Squares
        speed={0.5}
        squareSize={25}
        direction="right" // up, down, left, right, diagonal
        borderColor="rgba(82, 8, 86, 1)"
        hoverFillColor="#222"
      />
      <div className="dashboard-container">
        <div className="card">
          <div className="card-header-graph">
            <div className="icon-container">
              <Zap size={16} color="black" />
            </div>
            <div className="card-content">
              <div className="card-title"></div>
              <div className="card-subtitle"></div>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="0"
                stroke="#b8b8beff"
                strokeOpacity={0.2}
                vertical={true}
                horizontal={false}
              />
              <XAxis
                // dataKey="name"
                // axisLine={false}
                // tickLine={false}
                // tick={{ fill: "#8b5fbf", fontSize: 10 }}
                // tickMargin={8}
                hide
              />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#b794f6"
                strokeWidth={2}
                dot={{
                  fill: "#ffffff",
                  strokeWidth: 2,
                  stroke: "#b794f6",
                  r: 3,
                }}
                activeDot={{
                  r: 4,
                  fill: "#ffffff",
                  stroke: "#b794f6",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AutomatedGraph;
