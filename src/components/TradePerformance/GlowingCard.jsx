import { motion } from "framer-motion";

const GlowingCard = ({ children, className = "", glowColor = "cyan" }) => {
  const glowShadows = {
    cyan: "shadow-[0_10px_10px_rgba(0,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]",
    blue: "shadow-[0_10px_10px_rgba(0,140,255,0.05)] hover:shadow-[0_0_20px_rgba(0,140,255,0.4)]",
    green:
      "shadow-[0_10px_10px_rgba(0,255,100,0.05)] hover:shadow-[0_0_20px_rgba(0,255,100,0.4)]",
    purple:
      "shadow-[0_10px_10px_rgba(180,0,255,0.05)] hover:shadow-[0_0_20px_rgba(180,0,255,0.4)]",
    orange:
      "shadow-[0_10px_10px_rgba(255,165,0,0.05)] hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]",
  };

  return (
    <motion.div
      className={`bg-gradient-to-b from-[#131313] to-[#111111] backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 ${glowShadows[glowColor]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default GlowingCard;
