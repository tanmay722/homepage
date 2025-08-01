import MyBarChart from "./MyBarChart";
import "./Trading.css";
import TextType from "../TextType/TextType";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";

const Trading = () => {
  return (
    <section className="trade-section">
      <div className="trade-badge">Accessing</div>
      <h2 className="trade-title">
        Why Do 90% of Market Participants Find <br />
        Trading Difficult?
      </h2>

      <div className="trade-cards-container">
        {/* Card 1 */}
        <div className="trade-card">
          <div className="trade-browser-frame">
            <div className="trade-browser-header">
              <span className="trade-dot trade-red" />
              <span className="trade-dot trade-yellow" />
              <span className="trade-dot trade-green" />
            </div>
            <div className="trade-browser-content trade-grid-2">
              <div className="trade-chart-box">
                <div className="trade-bar">
                  <MyBarChart />
                </div>
              </div>
              <div className="trade-target-box" />
              <div className="trade-text-box" />
            </div>
          </div>
          <h3>Market is Unpredictable</h3>
          <p>
            We dive deep into your needs, exploring
            <br /> ideas and defining strategies for long-term <br />
            success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="trade-card">
          <div className="trade-browser-frame">
            <div className="trade-browser-header">
              <span className="trade-dot trade-red" />
              <span className="trade-dot trade-yellow" />
              <span className="trade-dot trade-green" />
            </div>
            <div className="trade-browser-content trade-code-box">
              <code>
                <TextType
                  text={[
                    `if not data:\n  return\n\nuser.name = "anonymous"\nuser.id = generate_id()\n\nif user.is_admin:`,
                    `grant_access(user)\nelse:\n  log("Standard user")\n\ncount += 1\nlog(f"User {user.name} processed")`,
                  ]}
                  typingSpeed={55}
                  pauseDuration={150}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </code>
            </div>
          </div>
          <h3>Too Much Noise & Data</h3>
          <p>
            We craft tailored solutions for your goals
            <br /> and rigorously test them for top-notch <br />
            reliability.
          </p>
        </div>

        {/* Card 3 */}
        <div className="trade-card">
          <div className="trade-browser-frame">
            <div className="trade-browser-header">
              <span className="trade-dot trade-red" />
              <span className="trade-dot trade-yellow" />
              <span className="trade-dot trade-green" />
            </div>
            <div className="trade-browser-content trade-system-ui">
              <div className="trade-sidebar">
                <div className="trade-menu-item trade-active">Efficiency</div>
                <div className="trade-menu-item">Speed</div>
                <div className="trade-menu-item">Accuracy</div>
                <div className="trade-menu-item">Security</div>
              </div>
              <div className="trade-status-panel">
                <div className="trade-status-icon">Status:</div>

                <motion.div
                  className="trade-rotating-icon"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <FiRefreshCw size={30} />
                </motion.div>

                <div className="trade-status-line">
                  <motion.div
                    className="trade-line-fill"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </div>

                <div className="trade-status-label">Unsecure Trade</div>
              </div>
            </div>
          </div>
          <h3>Risk Management is Hard</h3>
          <p>
            We deploy your solution seamlessly and <br /> ensure its continued
            performance with <br /> ongoing care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trading;
