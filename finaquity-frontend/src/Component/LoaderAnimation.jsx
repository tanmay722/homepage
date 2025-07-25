import { motion, AnimatePresence } from "framer-motion";
import "./LoaderAnimation.css";

const LoaderAnimation = ({ image, alt = "loading icon" }) => {
  return (
    <div className="loader-container">
      <AnimatePresence>
        <motion.div
          className="core-circle"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <motion.img
            src={image}
            alt={alt}
            className="thumb-icon"
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoaderAnimation;
