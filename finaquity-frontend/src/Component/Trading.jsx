import MyBarChart from "./MyBarChart";
import "./Trading.css";
import TextType from "../TextType/TextType";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";

const Trading = () => {
  return (
    <section className="trading-section">
      <div className="badge">Accessing</div>
      <h2 className="title">
        Why Do 90% of Market Participants Find <br />
        Trading Difficult?
      </h2>

      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <div className="browser-frame">
            <div className="browser-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-content grid-2">
              <div className="chart-box">
                <div className="bar_">
                  <MyBarChart />
                </div>
              </div>
              <div className="target-box" />
              <div className="text-box" />
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
        <div className="card">
          <div className="browser-frame">
            <div className="browser-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-content code-box_">
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
        <div className="card">
          <div className="browser-frame">
            <div className="browser-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-content system-ui">
              <div className="sidebar">
                <div className="menu-item active">Efficiency</div>
                <div className="menu-item">Speed</div>
                <div className="menu-item">Accuracy</div>
                <div className="menu-item">Security</div>
              </div>
              <div className="status-panel">
                {/* Static label */}
                <div className="status-icon">Status:</div>

                {/* Rotating arrow icon */}
                <motion.div
                  className="rotating-icon"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <FiRefreshCw size={30} />
                </motion.div>

                {/* Animated red line */}
                <div className="status-line">
                  <motion.div
                    className="line-fill"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Pulsing warning text */}
                <div className="status-label">Unsecure Trade</div>
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
