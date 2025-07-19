import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImg from "../../assets/Home/hero.png";
import HeroLogo from "../../assets/Home/heroLogo.png";

const textVariants = [
  "Where Advanced Algorithms Meet <span class='text-[#24B224]'>Market Opportunities</span>",
  "Revolutionary AI-powered <span class='text-[#24B224]'> Trading Strategies</span>",
  "Precision Trading Cutting-Edge <span class='text-[#24B224]'>Predictive Intelligence</span>",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="relative flex flex-col justify-center min-h-[86vh] text-white"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center container lg:px-16">
        {/* Logo */}
        <img
          src={HeroLogo}
          alt="Logo"
          className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-2xl 2xl:max-w-3xl h-auto mb-4"
        />

        {/* Main Heading */}
        <h1 className="font-normal tracking-wide sm:space-y-2 md:space-y-4 mb-2">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block text-center">
            Revolutionizing Retail Trading
          </span>
        </h1>

        <motion.p
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-xl xl:text-2xl text-gray-300 min-h-[80px] mt-16 text-center"
          dangerouslySetInnerHTML={{ __html: textVariants[currentText] }}
        />

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <NavLink to="/club">
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full  bg-gradient-to-r from-[#24B224] to-green-700">
                Finaquity Club
              </button>
            </NavLink>
          </motion.div>
          <NavLink to="/screener">
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full  bg-gradient-to-r from-[#FF9100] to-yellow-800">
              Screener
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
