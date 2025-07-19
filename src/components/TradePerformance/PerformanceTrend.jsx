import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
import GlowingCard from "./GlowingCard";
import LineChart from "./LineChart";

const PerformanceTrend = () => {
  const [performance, setPerformance] = useState({
    overallAvgReturn: 0,
    last30DaysAvg: 0,
    closedTrades: 0,
    accuracy: 0,
    totalPoints: 0,
    bestTradePoints: 0,
    consistency: 0,
    growth: 0,
    successfulTrades: 0,
    failedTrades: 0,
    avgDaysPerTrade: 0,
    activeDays: 0,
    riskReward: 0,
    chartData: [],
  });

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/trades-performance`
        );
        const data = await res.json();
        setPerformance(data);
        // console.log("Performance data:", data);
      } catch (error) {
        console.error("Failed to fetch performance:", error);
      }
    };

    fetchPerformance();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      {/* Chart and Accuracy Section */}
      <motion.div variants={itemVariants}>
        <GlowingCard className="overflow-hidden" glowColor="blue">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Section */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">
                  Performance Trend
                </h3>
                <div className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full text-center">
                  Last {performance?.chartData.length} Trades
                </div>
              </div>

              <LineChart data={performance?.chartData} />

              <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-700/50">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Best Trade</p>
                  <p className="font-bold text-green-500 text-lg">
                    +{performance?.bestTradePoints} pts
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Consistency</p>
                  <p className="font-bold text-blue-500 text-lg">
                    {performance?.consistency}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Growth</p>
                  <p className="font-bold text-green-500 text-lg">
                    +{performance?.growth}%
                  </p>
                </div>
              </div>
            </div>

            {/* Accuracy Section */}
            <div className="flex flex-col items-center justify-center">
              <CircularProgress percentage={performance?.accuracy} />
              <div className="mt-6 text-center w-full">
                <p className="text-sm text-gray-400 mb-4 font-medium">
                  Trading Accuracy
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-800/30 rounded-lg p-3">
                    <span className="text-gray-400 text-sm">Successful:</span>
                    <span className="font-bold text-green-400">
                      {performance?.successfulTrades} trades
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800/30 rounded-lg p-3">
                    <span className="text-gray-400 text-sm">Failed:</span>
                    <span className="font-bold text-red-400">
                      {performance?.failedTrades} trades
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>
      </motion.div>
    </div>
  );
};

export default PerformanceTrend;
