import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import card1 from "../../assets/Home/card1.png";
import card2 from "../../assets/Home/card2.png";
import card3 from "../../assets/Home/card3.png";
import card4 from "../../assets/Home/card4.png";

const cards = [
  {
    id: 1,
    title: "Data Ingestion Layer",
    subtitle: "12,400+ global sources | 98% uptime",
    alert: null,
    bgImg: card1,
    url: "/algomindthink?text=data-ingestion",
  },
  {
    id: 2,
    title: "Sentiment Cortex",
    subtitle: "Analyzing 1.2M news/articles hourly | 95% accuracy",
    alert: null,
    bgImg: card2,
    url: "/algomindthink?text=sentiment-cortex",
  },
  {
    id: 3,
    title: "Pattern Recognition Engine",
    subtitle: "142B+ historical patterns | 0.2ms anomaly detection",
    alert: "Live anomaly detected !!",
    bgImg: card3,
    url: "/algomindthink?text=pattern-recognition",
  },
  {
    id: 4,
    title: "7-Layer Risk Engine",
    subtitle: "Real-time stress testing | 99.9% fraud blocked",
    alert: "Blocked 12,402 threats today",
    bgImg: card4,
    url: "/algomindthink?text=seven-layer-risk",
  },
];

const LiveBadge = () => (
  <div className="absolute top-2 sm:top-4 md:top-2 xl:top-4 right-2 sm:right-4 md:right-2 xl:right-4 flex items-center gap-1.5 bg-green-600/20 px-2 py-1 rounded-md">
    <motion.div
      className="h-2 w-2 rounded-full bg-green-500"
      animate={{
        opacity: [1, 0.4],
        scale: [1, 0.9],
      }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
    <span className="text-green-400 text-xs font-medium">Live</span>
  </div>
);

export default function HowAlgoMindThink() {
  return (
    <div className="p-6 md:p-12 lg:pt-24">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            How{" "}
            <span className="bg-gradient-to-r from-[#FF9100] to-[#25DB72] text-transparent bg-clip-text">
              AlgoMind
            </span>{" "}
            Thinks
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            A multi-layered neural architecture processing 142+ data dimensions
            in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Link to={card.url} key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-[#161616]/50 bg-no-repeat bg-contain bg-center flex flex-col justify-between aspect-[16/9]"
                style={{ backgroundImage: `url(${card.bgImg})` }}
              >
                <LiveBadge />

                <div className="absolute flex-col text-center justify-center w-full mx-auto top-[15%]">
                  <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-white text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base mt-6 w-full">
                    {card.subtitle}
                  </p>
                </div>

                {card.alert && (
                  <div className="flex justify-center items-center mb-4 lg:mb-8 mt-auto text-center">
                    <p
                      className={`${
                        card.id === 3 ? "text-red-500" : "text-yellow-600"
                      } text-sm font-semibold`}
                    >
                      {card.alert}
                    </p>
                    {card.id === 3 && (
                      <motion.div
                        className="h-2 w-2 rounded-full bg-red-500 ml-3"
                        animate={{
                          opacity: [1, 0.4],
                          scale: [1, 0.9],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      />
                    )}
                  </div>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
