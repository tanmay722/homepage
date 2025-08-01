import React from "react";
import "./HeroSection.css";
import Marquee from "react-fast-marquee";
import Particles from "../Particles/Particles";

const HeroSection = () => {
  return (
    <section className="finaquity-hero-wrapper">
      {/* Background particles - positioned to cover entire wrapper */}
      <div className="finaquity-particles-container">
        <Particles
          particleColors={["#ffffff", "#e5d8d8ff"]}
          particleCount={550}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main content */}
      <div className="finaquity-hero-content">
        <div className="finaquity-hero-notification">
          <span>⚡ Manage projects end-to-end</span>
          <button className="finaquity-hero-arrow-btn">➜</button>
        </div>

        <h1 className="finaquity-hero-main-title">
          Investing & Trading <br /> through AI.
        </h1>

        <h2 className="finaquity-hero-sub-title">
          Speedy, Intelligent,{" "}
          <span className="finaquity-hero-bold-text">
            <br />
            Protected.
          </span>
        </h2>

        <p className="finaquity-hero-desc">
          FINAQUITY brings pro-level AI trading signals, risk control, and
          portfolio <br />
          insights, all in one platform.
        </p>

        <div className="finaquity-hero-button-group">
          <button className="finaquity-hero-btn finaquity-hero-btn-green">
            Get Started For Free
          </button>
          <button className="finaquity-hero-btn finaquity-hero-btn-white">
            See AI in Action
          </button>
        </div>

        <p className="finaquity-hero-footer-text">
          Trusted by 50,000+ businesses for innovative design and growth.
        </p>

        <div className="finaquity-hero-marquee-container">
          <Marquee
            speed={60}
            gradient={true}
            direction={"right"}
            pauseOnHover
            gradientColor={[0, 0, 0]}
            gradientWidth={100}
          >
            ⚡ Fast. 🔐 Secure. 🤖 AI-Powered. 📊 Data-Driven. 🔍 Precise. 🧠
            Smart. 🔄 Adaptive. 💹 Profitable. 🕒 Real-Time. 🎯 Targeted. 💡
            Insightful. 🧱 Solid.🚀 Speed. 🌐 Global. 🧭 Guided. 💬 Informed. 🔧
            Tuned. 🎲 Risk-Controlled. 🛡️ Protected.
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
