import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaChartBar,
  FaBalanceScale,
  FaHeartbeat,
  FaNewspaper,
  FaGlobe,
  FaUsers,
  FaLink,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

const categories = [
  { label: "FII/DII", link: "/FiiDiidata", icon: FaChartBar },
  { label: "Market News", link: "/market-news", icon: FaNewspaper },
  { label: "Option Chain", link: "/option-chain", icon: FaLink },
  { label: "Top Gainers", link: "/top-gainers", icon: FaChartLine },
  { label: "Top Losers", link: "/top-losers", icon: FaChartLine },
  { label: "F&O Trade", link: "/F&O-Trade", icon: FaChartBar },
  {
    label: "Commodities",
    link: "/market-research-commodities",
    icon: FaBalanceScale,
  },
  { label: "Global Markets", link: "/market-research-global", icon: FaGlobe },
  { label: "Crypto Trade", link: "/crypto-trades", icon: FaChartBar },
  { label: "Finaquity Club", link: "/club", icon: FaUsers },
  { label: "Stock Research", link: "/Daily-Stock-Research", icon: FaHeartbeat },
];

const settingsRight = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  rtl: false,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 6 } },
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 4 } },
    { breakpoint: 640, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const settingsLeft = {
  ...settingsRight,
  rtl: true, // Moves the second row in the opposite direction
};

const ScrollingCategories = () => {
  return (
    <div className="container py-16 lg:py-20 text-center px-4">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 font-bold tracking-wide mx-2">
        Decode Markets Like Never Before
      </h2>
      <span className="text-[#24B224] bg-[#2c2c2c] rounded-lg h-6 text-xs sm:text-sm md:text-base font-semibold px-4 py-1">
        Popular at Finaquity
      </span>

      <div className="mt-8">
        <Slider {...settingsRight}>
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.link}
              className="flex flex-col items-center justify-center text-center my-4 px-2"
            >
              <div className="text-white flex items-center justify-center gap-1 sm:gap-2 mx-auto py-3 sm:py-4 rounded-xl shadow-md border border-[#24B224] bg-gradient-to-b from-[#131313] to-[#111111] transition-transform hover:scale-105 lg:hover:scale-110 w-full">
                {React.createElement(category.icon, {
                  size: 18,
                  className: "text-[#24B224]",
                })}
                <span className="text-xs sm:text-base md:text-lg xl:text-xl font-semibold whitespace-nowrap">
                  {category.label.replace(/ /g, "\u00A0")}
                </span>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="mt-4">
        <Slider {...settingsLeft}>
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.link}
              className="flex flex-col items-center justify-center text-center my-4 px-2"
            >
              <div className="text-white flex items-center justify-center gap-1 sm:gap-2 mx-auto py-3 sm:py-4 rounded-xl shadow-md border border-[#24B224] bg-gradient-to-b from-[#131313] to-[#111111] transition-transform hover:scale-105 lg:hover:scale-110 w-full">
                {React.createElement(category.icon, {
                  size: 18,
                  className: "text-[#24B224]",
                })}
                <span className="text-xs sm:text-base md:text-lg xl:text-xl font-semibold whitespace-nowrap">
                  {category.label.replace(/ /g, "\u00A0")}
                </span>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollingCategories;
