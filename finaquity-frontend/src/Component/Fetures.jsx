import React from "react";
import "./Features.css";
import StarBorder from "../StarBorder/StarBorder";
import AnimatedLineChart from "./LineGraph";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
    <div className="trading-feature">
      {/* Header */}
      <div className="header">
        {/* <StarBorder
          as="div"
          className="custom-class-header"
          color="magenta"
          speed="5s"
          thickness={3}
        > */}
        <div className="badge_">Short Term Trade Features</div>
        {/* </StarBorder> */}

        <h1 className="title">
          Short-Term Trading, Supercharged –<br />
          Precision, Speed & Smart Market Insights
        </h1>
        <p className="subtitle">
          Perform trading actions with precision, combining real-time technical
          analysis, sentiment insights, and advanced pattern recognition for
          smarter market decisions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {/* AI Trade Signals */}
        <div className="feature-card  item-a">
          <div className="card-header ">
            <div className="chat-interface">
              <div className="chat-message">
                <div className="avatar"></div>
                <div className="message-bubble"></div>
              </div>
              <div className="chat-message">
                <div className="message-bubble"></div>
                <div className="avatar"></div>
              </div>
              <div className="chat-message">
                <div className="avatar"></div>
                <div className="message-bubble"></div>
              </div>

              <div className="star-input">
                <StarBorder
                  as="div"
                  className="custom-class-input"
                  color="magenta"
                  speed="5s"
                  thickness={5}
                >
                  <div className="chat-input">
                    <span className="chat-input-text">Ask me something...</span>
                    <div className="send-button">→</div>
                  </div>
                </StarBorder>
              </div>
            </div>
          </div>
          <div className="card-content Signals">
            <h3 className="card-title">AI Trade Signals</h3>
            <p className="card-description">
              Get instant market insights backed by deep <br />
              learning, pattern recognition, and market
              <br /> sentiment analysis.
            </p>
          </div>
        </div>

        {/* Broker API Integration */}
        <div className="feature-card  item-b">
          <div className="card-header ">
            <div className="broker-interface">
              <div className="search-bar">🔍 Select your broker account...</div>
              <div className="star-button">
                <StarBorder
                  as="div"
                  className="custom-class-broker"
                  color="magenta"
                  speed="5s"
                  thickness={3}
                >
                  <div className="connect-button">Connect</div>
                </StarBorder>
              </div>
            </div>
          </div>
          <div className="card-content broker">
            <h3 className="card-title">Broker API Integration</h3>
            <p className="card-description">
              Execute trades instantly with one click,
              <br /> connected to top brokers like Zerodha,
              <br /> Upstox & Binance.
            </p>
          </div>
        </div>

        {/* Strategy Building */}
        <div className="feature-card  item-c">
          <div className="card-header ">
            <div className="strategy-interface">
              <div className="stock-item stock-item-positive">
                <span className="triangle-up">▲</span>
                <span>Reliance</span>
                <div className="dropdown-arrow">⌄</div>
              </div>

              <div className="ltstock">
                <div className="stock-item stock-item-negative">
                  <span className="triangle-down">▼</span>
                  <span>L&T Tech</span>
                  <div className="dropdown-arrow">^</div>
                </div>
                <div className="stock-details">
                  <div className="detail-row">
                    <span>Current Stock Price:</span>
                    <span>₹3,00.15</span>
                  </div>
                  <div className="detail-row">
                    <span>52 Week Range:</span>
                    <span>₹2,500.00 - ₹4,000.00</span>
                  </div>
                  <div className="detail-row">
                    <span>Market Capitalization:</span>
                    <span>Price-to-Earnings (P/E):</span>
                  </div>
                  <div className="detail-row">
                    <span>₹20,47,863 Cr</span>
                    <span>24.82</span>
                  </div>
                </div>
              </div>
              <div className="star-button">
                <StarBorder
                  as="div"
                  className="custom-class-broker"
                  color="magenta"
                  speed="5s"
                  thickness={3}
                >
                  <div className="mark-chart">Mark this chart</div>
                </StarBorder>
              </div>
            </div>
          </div>
          <div className="card-content ">
            <h3 className="card-title">Strategy Building</h3>
            <p className="card-description">
              AI detects micro-trends & high-frequency trading opportunities to
              help scalpers and intraday traders.
            </p>
          </div>
        </div>

        {/* Live Market Data */}
        <div className="feature-card  item-d">
          <div className="card-header">
            <div className="analytics-interface">
              <div className="filters-section">
                <h5> Filters:</h5>
                <div className="filter-item">Trade Efficiency</div>
                <div className="filter-item">Risk Reduction</div>
                <div className="filter-item">Automated Exits</div>
                <div className="filter-item">Insights</div>
              </div>
              <div className="chart-section">
                <div className="efficiency-chart">
                  <div className="titlep">
                    <div className="chart-title">
                      Trade <br />
                      Efficiency
                    </div>
                    <div className="percentage">+23%</div>
                  </div>
                  <AnimatedLineChart />
                  <p className="description_">
                    Trade efficiency in this Month increased to 23% as
                    <br /> compared to last week.
                  </p>
                </div>
                <div className="performance-metrics">
                  <div className="metric-box">
                    <div className="metric-title">Overall:</div>
                    <div className="metric-value">48.9%</div>
                    <div className="metric-subtitle">
                      <motion.div
                        className="underline green-line"
                        key={animationKey}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                      />
                    </div>
                    <div className="metric-note">
                      Overall now you have 48.9% better analysis as compared to
                      previous week
                    </div>
                    <div className="star-button">
                      <StarBorder
                        as="div"
                        className="custom-class-broker"
                        color="magenta"
                        speed="5s"
                        thickness={3}
                      >
                        <div className="export-btn">Export</div>
                      </StarBorder>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">
              Live Market Data & Sentiment Analysis
            </h3>
            <p className="card-description">
              AI tracks social media, news, and market orders to predict
              momentum
              <br /> shifts before they happen.
            </p>
          </div>
        </div>

        {/* Risk Management */}
        <div className="feature-card  item-e">
          <div className="card-header risk">
            <div className="risk-interface">
              <div className="risk-chart">
                <img src={RiskImage} alt="Risk Report" className="risk-image" />
              </div>
              <div className="risk-report">
                <div className="report-title">Risk Report</div>
                <div className="report-items">
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                  <div className="report-item"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">7-Layer AI Risk Management</h3>
            <p className="card-description">
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
