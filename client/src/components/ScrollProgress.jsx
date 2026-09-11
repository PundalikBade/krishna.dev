import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[9999] h-[5px] border-b-2 border-navy stripes-orange"
      style={{ scaleX, transformOrigin: "0 0" }}
    />
  );
};

export default ScrollProgress;