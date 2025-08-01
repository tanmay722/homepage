import "./LongTermFeatures.css";
import img1 from "../Images/img1.avif";
import img2 from "../Images/img2.avif";
import img3 from "../Images/img3.avif";
import img4 from "../Images/img4.avif";
import Portfolio from "./Portfolio";
import WeeklyProgress from "./WeeklyProgress";
import AutomatedGraph from "./AutomatedGraph";
import TotalViewsChart from "./TotalViewsChart";

const LongTermFeatures = () => {
  return (
    <section className="longterm-section">
      <span className="longterm-badge">Long Term Investment Features</span>
      <h2 className="longterm-title">
        AI-Powered Long-Term Investing – Build <br />
        Wealth with Confidence
      </h2>
      <p className="longterm-subtitle">
        Investing long-term requires deep research, strong risk management, and
        <br />
        smart portfolio structuring
      </p>

      <div className="longterm-wrapper-box">
        <div className="longterm-inner-grid">
          <div className="longterm-card card-ai">
            <div className="longterm-portfolio-container">
              <Portfolio />
            </div>
            <h3 className="longterm-card-title">
              AI-Driven Portfolio
              <br />
              Optimization
            </h3>
            <p className="longterm-card-description">
              FINAQUITY's AI automatically selects & balances
              <br /> assets for long-term growth while minimizing risks.
            </p>
          </div>

          <div className="longterm-card card-mutual">
            <div className="longterm-portfolio-container">
              <WeeklyProgress />
            </div>
            <h3 className="longterm-card-title">Mutual Fund & ETF Analysis</h3>
            <p className="longterm-card-description">
              AI ranks the best-performing mutual funds & ETFs,
              <br /> helping investors choose high-yield, low-risk assets.
            </p>
          </div>

          <div className="longterm-card card-rebalance">
            <div className="longterm-portfolio-container">
              <AutomatedGraph />
            </div>
            <h3 className="longterm-card-title">
              Automated Rebalancing &<br /> Risk Hedging
            </h3>
            <p className="longterm-card-description">
              AI dynamically rebalances your investments based
              <br />
              on market conditions & risk factors.
            </p>
          </div>

          <div className="longterm-card card-macro">
            <div className="longterm-portfolio-container">
              <TotalViewsChart />
            </div>
            <h3 className="longterm-card-title">
              Macroeconomic & <br />
              Fundamental Insights
            </h3>
            <p className="longterm-card-description">
              AI tracks global trends, earnings reports, and
              <br /> economic indicators to guide investment decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="longterm-footer">
        <p>
          Backtested Investment
          <br />
          Strategies
        </p>
        <p>
          Global Market Data & <br />
          News
        </p>
        <p>
          Custom Alerts & Risk <br />
          Warnings
        </p>
        <p>
          Exclusive Investor Reports <br />& Insights
        </p>
      </div>
    </section>
  );
};

export default LongTermFeatures;
