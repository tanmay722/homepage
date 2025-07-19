import HeroSection from "./components/Home/HeroSection";
import ScrollingIcons from "./components/Home/ScrollingIcons";
import HomeStockResearchBox from "./components/Home/HomeStockRecommendationBox";
import GainersAndLosers from "./components/Home/GainersAndLosers";
import AlgoMind from "./components/Home/AlgoMind";
import ElevateSection from "./components/Home/Elevate";
import HowAlgoMindThink from "./components/Home/HowAlgoMindThink";
import UnlockSuperPower from "./components/UnlockSuperPower";
import WhatsAppGroupButton from "./components/WhatsAppGroupButton";
import GrowthTracker from "./components/GrowthTracker";
import FeatureSection from "./components/Home/FeatureSection";
import PerformanceTrend from "./components/TradePerformance/PerformanceTrend";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ScrollingIcons />
      <HomeStockResearchBox />
      <FeatureSection />
      <GrowthTracker />
      <div className="w-full container mx-auto p-2 sm:p-4 md:p-6 ">
        <PerformanceTrend />
      </div>
      <UnlockSuperPower />
      <AlgoMind />
      <HowAlgoMindThink />
      <div className="container px-6">
        <div className="mt-16 xl:mt-20 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center my-6 font-bold tracking-wide">
            Explore Trending Stock
          </h2>
          <GainersAndLosers />
        </div>
      </div>
      <ElevateSection />
      {/* WhatsApp Group Button */}
      <WhatsAppGroupButton groupLink="https://chat.whatsapp.com/G19OxJKfAOU49BtcrGq7YF" />
    </>
  );
};

export default Home;
