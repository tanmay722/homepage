import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FcBullish, FcBearish } from "react-icons/fc";

const GainersAndLosers = () => {
  const [loading, setLoading] = useState(true); // For loading spinner
  const [error, setError] = useState(null); // For error handling
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gainersResponse, losersResponse] = await Promise.all([
          axios.get(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/api/stockMetrics/gainers/nifty50`
          ),
          axios.get(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/api/stockMetrics/losers/nifty50`
          ),
        ]);
        setGainers(gainersResponse.data.data || []);
        setLosers(losersResponse.data.data || []);
        // console.log(gainersResponse.data);
      } catch (error) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pb-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
        {/* Price Gainers */}
        <div className="p-2 sm:p-6 mb-4 md:mb-10 bg-green-900/40 rounded-lg shadow-lg">
          <div className="flex text-center justify-center items-center mb-4">
            <FcBullish className="mr-2 text-3xl md:text-5xl" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Price Gainers
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {gainers.length === 0 ? (
              <p className="text-center text-gray-400">
                No gainers found in Nifty50.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full text-center text-xs sm:text-sm md:text-base">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="py-2 md:py-4 px-4 sm:px-8">Symbol</th>
                      <th className="py-2 md:py-4 px-4 sm:px-8">LTP</th>
                      <th className="py-2 md:py-4 px-4 sm:px-8">Change</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#111111] ">
                    {gainers.slice(0, 5).map((stock, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-2 md:py-4 px-4 sm:px-8">
                          {stock.symbol}
                        </td>
                        <td className="py-2 md:py-4 px-4 sm:px-8">
                          ₹{Number(stock.ltp).toLocaleString("en-IN")}
                        </td>
                        <td className="py-2 md:py-4 px-4 sm:px-8 text-green-500">
                          <div className="flex justify-center">
                            <AiOutlineArrowUp className="mr-2 text-2xl" />
                            {stock.changePercent}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>

        {/* Price Losers */}
        <div className="p-2 sm:p-6 mb-4 md:mb-10 bg-red-900/40 rounded-lg shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <FcBearish className="mr-2 text-3xl md:text-5xl" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Price Losers
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {losers.length === 0 ? (
              <p className="text-center text-gray-400">
                No losers found in Nifty50.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full text-center text-xs sm:text-sm md:text-base">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="py-2 md:py-4 px-4 sm:px-8">Symbol</th>
                      <th className="py-2 md:py-4 px-4 sm:px-8">LTP</th>
                      <th className="py-2 md:py-4 px-4 sm:px-8">Change</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#111111] ">
                    {losers.slice(0, 5).map((stock, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-2 md:py-4 px-4 sm:px-8">
                          {stock.symbol}
                        </td>
                        <td className="py-2 md:py-4 px-4 sm:px-8">
                          ₹{Number(stock.ltp).toLocaleString("en-IN")}
                        </td>
                        <td className="py-2 md:py-4 px-4 sm:px-8 text-red-500">
                          <div className="flex justify-center">
                            <AiOutlineArrowDown className="mr-2 text-2xl" />
                            {stock.changePercent}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GainersAndLosers;
