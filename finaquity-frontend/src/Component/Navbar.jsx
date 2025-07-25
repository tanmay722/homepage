import React from "react";
import { Link } from "react-router-dom";
import GlassSurface from "../GlassSurface/GlassSurface";
import SplitText from "../SplitText/SplitText";
import "./Navbar.css";
import finaquityLogo from "../Images/logo.avif";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <GlassSurface
        width={1100}
        height={60}
        borderRadius={20}
        className="navbar-glass"
        displace={15}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.7}
      >
        <div className="navbar-content">
          {/* Logo and Beta */}
          <div className="navbar-left">
            <img
              src={finaquityLogo}
              alt="FINAQUITY Beta Logo"
              className="logo-image"
            />
          </div>

          {/* Nav Links */}
          <div className="navbar-links">
            <Link to="/market-pulse" className="nav-link active">
              <SplitText
                text="Market Pulse"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Link>

            <Link to="/insights" className="nav-link">
              <SplitText
                text="Insights"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Link>

            <Link to="/community" className="nav-link">
              <SplitText
                text="Community"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Link>

            <Link to="/offerings" className="nav-link">
              <SplitText
                text="All Offering"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Link>
          </div>

          {/* Login Button */}
          <div className="navbar-right">
            <button className="login-btn">Login</button>
          </div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default Navbar;
