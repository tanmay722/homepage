// import { motion } from "framer-motion";
const SideImage = ({ position }) => {
  return (
    <motion.div
      className={`side-image ${position}`}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <img src={sampleImg} alt="graph" />
    </motion.div>
  );
};

export default SideImage;
