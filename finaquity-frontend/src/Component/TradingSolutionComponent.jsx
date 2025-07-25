import { useState, useEffect } from "react";
import "./TradingSolutionComponent.css";
import trade1 from "../Images/trade1.avif";
import trade2 from "../Images/trade2.avif";
import trade3 from "../Images/trade3.avif";
import { motion, AnimatePresence } from "framer-motion";
import Silk from "../Silk/Silk";

const TradingSolutionComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
    {
      title: "Make Smarter Trading Decisions with AI",
      description:
        "FINAQUITY’s AI scans millions of market data points to generate real-time trade signals with high accuracy. It identifies trends before they happen, combining deep learning, sentiment analysis, and historical patterns to provide risk-adjusted insights for smarter trading.",
      image: trade1,
    },
    {
      title: "AI + Expert Insights for the Best Trading Decisions",
      description:
        "AI alone isn’t enough — FINAQUITY combines the power of artificial intelligence with the wisdom of SEBI-registered experts and the strength of a collaborative trading community. This holistic approach ensures traders not only make data-driven decisions but also benefit from real-world experience, mentorship, and continuous peer learning for truly confident and informed trading.",
      image: trade2,
    },
    {
      title: "Trade with AI Precision & Automated Execution",
      description:
        "Our sophisticated AI algorithms are designed to analyze massive volumes of complex market data in real time, detecting subtle patterns and high-probability trade opportunities with remarkable accuracy. With automated execution that responds in milliseconds, FINAQUITY ensures your trades are placed with unmatched speed and precision—giving you a critical edge in fast-moving markets and helping you consistently stay ahead of the curve.",
      image: trade3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);

      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trading-solution">
      <div className="container">
        {/* Header */}
        <div className="header_">
          <h1 className="main-title_">The all-in-one solution</h1>
          <p className="subtitle_">
            AI-Powered Trading & Investing—Built for <br />
            Success
          </p>
        </div>

        {/* Main Content */}
        <div className="main-content_">
          {/* Left Side - Image */}
          <div className="image-section">
            <div style={{ width: "100%", position: "relative" }}>
              <Silk
                speed={5}
                scale={1}
                color="#03cb1aff"
                noiseIntensity={1.5}
                rotation={1}
              />
              <img
                key={animationKey}
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="slide-image fade-image"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="content-body">
            {slides.map((slide, index) => (
              <div key={index} className="slide-block">
                {/* Title */}
                <h3
                  className={`slide-title ${
                    index === currentSlide ? "active-title" : "inactive-title"
                  }`}
                >
                  {slide.title}
                </h3>

                {/* Animated Line */}
                {index === currentSlide ? (
                  <motion.div
                    className="underline green-line"
                    key={animationKey}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                ) : (
                  <div className="underline gray-line" />
                )}

                {/* Simple Description */}
                {index === currentSlide && (
                  <p className="slide-description">{slide.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingSolutionComponent;
