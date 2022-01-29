// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styling
import classes from "./SectionHeading.module.css";

const SectionHeading = ({ title, subtitle }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animVariants = {
    visible: { opacity: 0.6, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animVariants}
      className={`lg:text-5xl text-4xl md:text-left uppercase text-center text-white font-normal opacity-60 mb-9 ${classes.letterSpacing10}`}
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeading;
