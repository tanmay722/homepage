import "./HeroSection.css";
import Marquee from "react-fast-marquee";
import Particles from "../Particles/Particles";
const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#e5d8d8ff"]}
          particleCount={350}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        <div className="hero-content">
          {/* Top pill button */}
          <div className="top-pill">
            <span>⚙️ Manage projects end-to-end</span>
            <button className="arrow">➜</button>
          </div>

          {/* Headings */}
          <h1 className="main-heading">
            Investing & Trading <br /> through AI.
          </h1>
          <h2 className="sub-heading">
            Speedy, Intelligent,{" "}
            <span className="bold">
              <br />
              Protected.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="description">
            FINAQUITY brings pro-level AI trading signals, risk control, and
            portfolio <br></br>insights, all in one platform.
          </p>

          {/*  Buttons */}
          <div className="button-group">
            <button className="btn green">Get Started For Free</button>
            <button className="btn white">See AI in Action</button>
          </div>

          {/* Footer Text */}
          <p className="footer-text">
            Trusted by 50,000+ businesses for innovative design and growth.
          </p>
          <div className="marquee-wrapper">
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
              Insightful. 🧱 Solid.🚀 Speed. 🌐 Global. 🧭 Guided. 💬 Informed.
              🔧 Tuned. 🎲 Risk-Controlled. 🛡️ Protected.
            </Marquee>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import SideImage from "./SideImage";
// import "./HeroSection.css";

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       {/* <SideImage position="left" /> */}

//       <div className="hero-content">
//         <h1>
//           Investing & Trading
//           <br /> through AI.
//         </h1>
//         <p className="tagline">
//           Speedy, Intelligent, <strong>Protected.</strong>
//         </p>
//         <p className="description">
//           FINAQUITY brings pro-level AI trading signals, risk control, and
//           portfolio insights, all in one platform.
//         </p>
//         <button className="see-ai-btn">See AI in Action</button>
//       </div>

//       {/* <SideImage position="right" /> */}
//     </div>
//   );
// };

// export default HeroSection;
