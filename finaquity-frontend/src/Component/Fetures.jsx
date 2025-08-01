import React, { useState, useEffect } from "react";
import "./Features.css";
import StarBorder from "../StarBorder/StarBorder";
import AnimatedLineChart from "./LineGraph";
import { motion } from "framer-motion";
import RiskImage from "../Images/graph.png";

const Features = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shorttrade-feature">
      <div className="shorttrade-header">
        <div className="shorttrade-badge">Short Term Trade Features</div>
        <h1 className="shorttrade-title">
          Short-Term Trading, Supercharged –<br />
          Precision, Speed & Smart Market Insights
        </h1>
        <p className="shorttrade-subtitle">
          Perform trading actions with precision, combining real-time technical
          analysis, sentiment insights, and advanced pattern recognition for
          smarter market decisions.
        </p>
      </div>

      <div className="shorttrade-features-grid">
        {/* AI Trade Signals */}
        <div className="shorttrade-feature-card shorttrade-item-a">
          <div className="shorttrade-card-header">
            <div className="shorttrade-chat-interface">
              <div className="shorttrade-chat-message">
                <div className="shorttrade-avatar"></div>
                <div className="shorttrade-message-bubble"></div>
              </div>
              <div className="shorttrade-chat-message">
                <div className="shorttrade-message-bubble"></div>
                <div className="shorttrade-avatar"></div>
              </div>
              <div className="shorttrade-chat-message">
                <div className="shorttrade-avatar"></div>
                <div className="shorttrade-message-bubble"></div>
              </div>

              <div className="shorttrade-star-input">
                <StarBorder
                  as="div"
                  className="shorttrade-custom-class-input"
                  color="magenta"
                  speed="5s"
                  thickness={5}
                >
                  <div className="shorttrade-chat-input">
                    <span className="shorttrade-chat-input-text">
                      Ask me something...
                    </span>
                    <div className="shorttrade-send-button">→</div>
                  </div>
                </StarBorder>
              </div>
            </div>
          </div>
          <div className="shorttrade-card-content shorttrade-Signals">
            <h3 className="shorttrade-card-title">AI Trade Signals</h3>
            <p className="shorttrade-card-description">
              Get instant market insights backed by deep <br />
              learning, pattern recognition, and market
              <br /> sentiment analysis.
            </p>
          </div>
        </div>

        {/* Broker API Integration */}
        <div className="shorttrade-feature-card shorttrade-item-b">
          <div className="shorttrade-card-header">
            <div className="shorttrade-broker-interface">
              <div className="shorttrade-search-bar">
                🔍 Select your broker account...
              </div>
              <div className="shorttrade-star-button">
                <StarBorder
                  as="div"
                  className="shorttrade-custom-class-broker"
                  color="magenta"
                  speed="5s"
                  thickness={3}
                >
                  <div className="shorttrade-connect-button">Connect</div>
                </StarBorder>
              </div>
            </div>
          </div>
          <div className="shorttrade-card-content shorttrade-broker">
            <h3 className="shorttrade-card-title">Broker API Integration</h3>
            <p className="shorttrade-card-description">
              Execute trades instantly with one click,
              <br /> connected to top brokers like Zerodha,
              <br /> Upstox & Binance.
            </p>
          </div>
        </div>

        {/* Strategy Building */}
        <div className="shorttrade-feature-card shorttrade-item-c">
          <div className="shorttrade-card-header">
            <div className="shorttrade-strategy-interface">
              <div className="shorttrade-stock-item shorttrade-stock-item-positive">
                <span className="shorttrade-triangle-up">▲</span>
                <span>Reliance</span>
                <div className="shorttrade-dropdown-arrow">⌄</div>
              </div>

              <div className="shorttrade-ltstock">
                <div className="shorttrade-stock-item shorttrade-stock-item-negative">
                  <span className="shorttrade-triangle-down">▼</span>
                  <span>L&T Tech</span>
                  <div className="shorttrade-dropdown-arrow">^</div>
                </div>
                <div className="shorttrade-stock-details">
                  <div className="shorttrade-detail-row">
                    <span>Current Stock Price:</span>
                    <span>₹3,00.15</span>
                  </div>
                  <div className="shorttrade-detail-row">
                    <span>52 Week Range:</span>
                    <span>₹2,500.00 - ₹4,000.00</span>
                  </div>
                  <div className="shorttrade-detail-row">
                    <span>Market Capitalization:</span>
                    <span>Price-to-Earnings (P/E):</span>
                  </div>
                  <div className="shorttrade-detail-row">
                    <span>₹20,47,863 Cr</span>
                    <span>24.82</span>
                  </div>
                </div>
              </div>
              <div className="shorttrade-star-button">
                <StarBorder
                  as="div"
                  className="shorttrade-custom-class-broker"
                  color="magenta"
                  speed="5s"
                  thickness={3}
                >
                  <div className="shorttrade-mark-chart">Mark this chart</div>
                </StarBorder>
              </div>
            </div>
          </div>
          <div className="shorttrade-card-content">
            <h3 className="shorttrade-card-title">Strategy Building</h3>
            <p className="shorttrade-card-description">
              AI detects micro-trends & high-frequency trading opportunities to
              help scalpers and intraday traders.
            </p>
          </div>
        </div>

        {/* Live Market Data */}
        <div className="shorttrade-feature-card shorttrade-item-d">
          <div className="shorttrade-card-header">
            <div className="shorttrade-analytics-interface">
              <div className="shorttrade-filters-section">
                <h5> Filters:</h5>
                <div className="shorttrade-filter-item">Trade Efficiency</div>
                <div className="shorttrade-filter-item">Risk Reduction</div>
                <div className="shorttrade-filter-item">Automated Exits</div>
                <div className="shorttrade-filter-item">Insights</div>
              </div>
              <div className="shorttrade-chart-section">
                <div className="shorttrade-efficiency-chart">
                  <div className="shorttrade-titlep">
                    <div className="shorttrade-chart-title">
                      Trade <br />
                      Efficiency
                    </div>
                    <div className="shorttrade-percentage">+23%</div>
                  </div>
                  <AnimatedLineChart />
                  <p className="shorttrade-description_">
                    Trade efficiency in this Month increased to 23% as
                    <br /> compared to last week.
                  </p>
                </div>
                <div className="shorttrade-performance-metrics">
                  <div className="shorttrade-metric-box">
                    <div className="shorttrade-metric-title">Overall:</div>
                    <div className="shorttrade-metric-value">48.9%</div>
                    <div className="shorttrade-metric-subtitle">
                      <motion.div
                        className="shorttrade-underline shorttrade-green-line"
                        key={animationKey}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                      />
                    </div>
                    <div className="shorttrade-metric-note">
                      Overall now you have 48.9% better analysis as compared to
                      previous week
                    </div>
                    <div className="shorttrade-star-button">
                      <StarBorder
                        as="div"
                        className="shorttrade-custom-class-broker"
                        color="magenta"
                        speed="5s"
                        thickness={3}
                      >
                        <div className="shorttrade-export-btn">Export</div>
                      </StarBorder>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shorttrade-card-content">
            <h3 className="shorttrade-card-title">
              Live Market Data & Sentiment Analysis
            </h3>
            <p className="shorttrade-card-description">
              AI tracks social media, news, and market orders to predict
              momentum
              <br /> shifts before they happen.
            </p>
          </div>
        </div>

        {/* Risk Management */}
        <div className="shorttrade-feature-card shorttrade-item-e">
          <div className="shorttrade-card-header shorttrade-risk">
            <div className="shorttrade-risk-interface">
              <div className="shorttrade-risk-chart">
                <img
                  src={RiskImage}
                  alt="Risk Report"
                  className="shorttrade-risk-image"
                />
              </div>
              <div className="shorttrade-risk-report">
                <div className="shorttrade-report-title">Risk Report</div>
                <div className="shorttrade-report-items">
                  {Array(8)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="shorttrade-report-item"></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="shorttrade-card-content">
            <h3 className="shorttrade-card-title">
              7-Layer AI Risk Management
            </h3>
            <p className="shorttrade-card-description">
              Monitors volatility, liquidity, and global events to minimize
              risks and protect capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
