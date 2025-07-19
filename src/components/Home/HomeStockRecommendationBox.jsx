import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AiTwotoneCalendar } from "react-icons/ai";

const HomeStockResearchBox = () => {
  // Today's Date
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="container mt-6 py-12">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Stock Recommendation Box */}
        <motion.div
          whileHover={{ rotateY: 15, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative w-full bg-[#111111]  border border-[#24B224] rounded-xl shadow-lg hover:shadow-[#24B224] overflow-hidden p-2 sm:p-4 md:p-6 flex flex-col md:flex-row items-start justify-between space-y-2 sm:space-y-6 md:space-y-0"
        >
          {/* Date Icon inside the box at the top-right */}
          <div className="absolute top-1 sm:top-4 left-auto right-4 sm:right-6 text-gray-300 flex items-center z-10">
            <AiTwotoneCalendar className="text-yellow-500 mr-2" />
            <span className="text-xs sm:text-sm">{today}</span>
          </div>

          {/* Left Section: Title & Blurred Description */}
          <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left pt-2">
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl tracking-wide animate__animated animate__fadeInDown">
              Explore our daily{" "}
              <span className="bg-gradient-to-r from-[#24B224] to-green-700 text-transparent bg-clip-text">
                Stock Research
              </span>
            </h2>

            {/* Description (Dynamic Blur on Hover) */}
            <motion.p
              initial={{ filter: "blur(6px)" }}
              whileHover={{ filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-300 px-2 sm:p-4 rounded-lg leading-relaxed"
            >
              Get daily analysis and strategies by NISM certified registered
              analyst
            </motion.p>
          </div>

          {/* Right Section: Button */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative group md:pt-12 text-center flex justify-center items-center w-full md:w-40"
          >
            <NavLink to="/swing-trading-ideas">
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full  bg-gradient-to-r from-[#24B224] to-green-700">
                Click&nbsp;to&nbsp;see
              </button>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeStockResearchBox;
