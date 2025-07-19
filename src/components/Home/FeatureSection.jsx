import React from "react";
import tiredImg from "../../assets/Home/tired.png";
import {
  BotMessageSquare,
  Sliders,
  TrendingUp,
  DollarSign,
  LineChart,
  CandlestickChart,
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <CandlestickChart />,
      text: "Algo Based Trading",
    },
    {
      icon: <BotMessageSquare />,
      text: "Perfect View & Support",
    },
    {
      icon: <TrendingUp />,
      text: "Daily Trade Ideas",
    },
    {
      icon: <DollarSign />,
      text: "Risk Management Tools",
    },
    {
      icon: <LineChart />,
      text: "Educational Resources",
    },
    {
      icon: <Sliders />,
      text: "Community Support",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center mt-4 sm:mt-8 md:mt-16 text-center"
      style={{ backgroundImage: `url(${tiredImg})` }}
    >
      <div className="container p-2 sm:p-4 md:p-6 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl pt-2 mb-4 font-bold tracking-wide animate__animated animate__fadeInDown">
          Tired of Losing Money in Stock Market?
        </h2>
        <span className="text-xl sm:text-3xl lg:text-4xl my-2 tracking-wide ">
          Join Finaquity Club
        </span>
        <div className="text-center pt-6">
          <span className="text-[#24B224] bg-[#2c2c2c] rounded-lg h-6 text-xs sm:text-sm md:text-base font-semibold px-4 py-1">
            Features you get
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 md:gap-8 my-6 sm:my-8 px-0 sm:px-4 md:px-8 lg:px-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 flex justify-center items-center p-1 h-4 xs:h-6 sm:h-10 w-4 xs:w-6 sm:w-10 bg-gradient-to-b from-[#93712f] to-[#2d230f] text-white rounded-full">
                {feature.icon}
              </div>
              <div className="ml-2 md:ml-4 pt-2">
                <h5 className="text-[11px] xs:text-[14px] sm:text-base md:text-lg xl:text-xl font-semibold mb-2">
                  {feature.text}
                </h5>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default FeatureSection;
