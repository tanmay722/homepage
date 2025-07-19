import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaSearch,
  FaNewspaper,
} from "react-icons/fa";
import { TbReport } from "react-icons/tb";

export default function UnlockSuperPower() {
  // Benefits data
  const benefits = [
    {
      icon: (
        <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      ),
      title: "Access to our",
      boldText: "Exclusive Screeners",
      url: "/screener",
    },

    {
      icon: (
        <FaLightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      ),
      title: "Unlimited Access to our",
      boldText: "Trade Ideas",
      url: "/dashboard",
    },
    {
      icon: (
        <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      ),
      title: "Get Access to ",
      boldText: "Finaquity Club",
      url: "/club",
    },
    {
      icon: (
        <TbReport className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      ),
      title: "Get Unlimited Stock",
      boldText: "Reports from Finaquity",
      url: "/qtr-earnings",
    },
    {
      icon: (
        <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      ),
      title: "Unlimited Access to",
      boldText: "Courses and Webinars",
      url: "/courses",
    },
    {
      icon: (
        <FaNewspaper className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      ),
      title: "Get Exclusive Updates on",
      boldText: "Market News",
      url: "/market-news",
    },
  ];

  const CustomIconDesign = ({ icon }) => (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
      <div className="absolute inset-0 bg-gray-900 rounded-lg border border-gray-800/50 shadow-lg flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-400/10 rounded-lg"
          animate={{
            boxShadow: [
              "0px 0px 0px rgba(245, 158, 11, 0.1)",
              "0px 0px 10px rgba(245, 158, 11, 0.2)",
              "0px 0px 0px rgba(245, 158, 11, 0.1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <div className="relative text-[#24B224]">{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="text-white py-16 p-2">
      <div className="container mx-auto border border-[#24B224] shadow-md shadow-green-800 hover:shadow-lg hover:shadow-green-800  rounded-3xl p-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Unlock 6 Superpowers
          </motion.h1>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-6 lg:gap-x-8 lg:gap-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to={benefit.url} className="w-full h-full">
                {/* Mobile View (Horizontal Layout) */}
                <div className="flex items-start gap-4 md:hidden">
                  <div className="flex-shrink-0">
                    <CustomIconDesign icon={benefit.icon} />
                  </div>
                  <div>
                    <div className="flex text-base ">
                      <h2 className="font-light text-white">
                        {benefit.title}{" "}
                        <span className="font-semibold">
                          {benefit.boldText}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Desktop View (Vertical Layout) */}
                <div className="hidden md:flex md:flex-col md:items-center md:text-center">
                  <div className="mb-4">
                    <CustomIconDesign icon={benefit.icon} />
                  </div>
                  <div>
                    <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-light text-white mt-2">
                      {benefit.title}{" "}
                      <span className="font-semibold block mt-1">
                        {benefit.boldText}
                      </span>
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
