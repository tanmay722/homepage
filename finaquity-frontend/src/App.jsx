import "./App.css";
import Navbar from "./Component/navbar";
import HeroSection from "./Component/HeroSection";
import ProductOverView from "./Component/ProductOverView";
import Trading from "./Component/Trading";
// import MyBarChart from "./Component/MyBarChart";
import TradingSolutionComponent from "./Component/TradingSolutionComponent";
import Features from "./Component/Fetures";
import LongTermFeatures from "./Component/LongTermFeatures";
import Benefits from "./Component/Benefits";
import PricingComponent from "./Component/PricingPlans";
import ProgressTracking from "./Component/ProgressTracking";
// import MentorMarquee from "./Component/MentorMarquee";
import TestimonialSection from "./Component/TestimonialSection";
import FAQComponent from "./Component/FAQComponent";
import BetaLanding from "./Component/BetaLanding";
import Footer from "./Component/Footer";
import Connect from "./Component/Connect";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductOverView />
      <Trading />
      <TradingSolutionComponent />
      <Features />
      <LongTermFeatures />
      <Benefits />
      <PricingComponent />
      <ProgressTracking />
      <Connect />
      <TestimonialSection />
      <FAQComponent />
      <BetaLanding />
      <Footer />
    </>
  );
}

export default App;
