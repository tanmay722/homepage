import "./Benefits.css";
import Brain from "../Images/Brain.png";
import Thumb from "../Images/thumsup.jpg";
import Person from "../Images/person.png";
import LightRays from "../LightRays/LightRays";
// import RippleGrid from "../RippleGrid/RippleGrid";
import LoaderAnimation from "./LoaderAnimation";
import Beams from "../Beams/Beams";
const Benefits = () => {
  return (
    <section className="trust-section">
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={1.3}
          lightSpread={0.8}
          rayLength={2}
          fadeDistance={0.6}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
        />
        <div className="forBackground">
          <p className="trust-subtitle">🔥 Benefits</p>
          <h2 className="trust-title">Why Trust Finaquity</h2>
          <p className="trust-description">
            FINAQUITY combines AI precision with SEBI-certified expert
            mentorship,
            <br />
            delivering smarter trades, risk management, and portfolio growth.
          </p>

          <div className="trust-cards">
            <div className="trust-card trust-card-ai">
              <div
                style={{
                  position: "relative",
                  height: "30vh",
                  overflow: "hidden",
                }}
              >
                <LightRays
                  raysOrigin="top-center"
                  raysColor="white"
                  raysSpeed={0.7}
                  lightSpread={0.9}
                  rayLength={2.4}
                  fadeDistance={0.6}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0}
                  distortion={0}
                  className="custom-rays"
                />
                <div className="trust-icon_">
                  <LoaderAnimation image={Brain} alt="Brain" />
                </div>
              </div>
              {/* <div
                style={{
                  width: "100%",
                  height: "30vh",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <Beams
                  beamWidth={2}
                  beamHeight={15}
                  beamNumber={12}
                  lightColor="#ffffff"
                  speed={2}
                  noiseIntensity={1.75}
                  scale={0.2}
                  rotation={0}
                />
                <div className="trust-icon_">
                  <LoaderAnimation image={Brain} alt="Brain" />
                </div>
              </div> */}
              <p className="trust-card-text">
                AI-Powered
                <br />
                Market Intelligence
              </p>
            </div>
            <div className="trust-card trust-card-ethical">
              <div
                style={{
                  position: "relative",
                  height: "30vh",
                  overflow: "hidden",
                }}
              >
                <LightRays
                  raysOrigin="top-center"
                  raysColor="white"
                  raysSpeed={0.7}
                  lightSpread={0.9}
                  rayLength={2.4}
                  fadeDistance={0.6}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0}
                  distortion={0}
                  className="custom-rays"
                />
                <div className="trust-icon_">
                  <LoaderAnimation image={Thumb} alt="Thumbs Up" />
                </div>
              </div>

              <p className="trust-card-text">
                Ethical AI, Full Transparency,
                <br />
                And Institutional-Grade Strategies
              </p>
            </div>
            <div className="trust-card trust-card-sebi">
              <div
                style={{
                  position: "relative",
                  height: "30vh",
                  overflow: "hidden",
                }}
              >
                <LightRays
                  raysOrigin="top-center"
                  raysColor="white"
                  raysSpeed={0.7}
                  lightSpread={0.9}
                  rayLength={2.4}
                  fadeDistance={0.6}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0}
                  distortion={0}
                  className="custom-rays"
                />
                <div className="trust-icon_">
                  <LoaderAnimation image={Person} alt="Person" />
                </div>
              </div>
              <p className="trust-card-text">
                SEBI-Certified Experts &<br />
                Live Mentorship
              </p>
            </div>
          </div>

          <div className="trust-stats">
            <div>
              <span className="trust-stat-value green">90%+</span>
              <p className="trust-stat-label">AI Accuracy</p>
            </div>
            <div>
              <span className="trust-stat-value white">50,000+</span>
              <p className="trust-stat-label">Active Users</p>
            </div>
            <div>
              <span className="trust-stat-value purple">100M+</span>
              <p className="trust-stat-label">Market Data Points</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
