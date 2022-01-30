// Hook
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styling
import classes from "./TimelineDivider.module.css";
import "../../../theme/utilities.css";

// Image
import divderImg from "../../../assets/images/divider-image.svg";

const TimelineDivider = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ delay: 0.3, type: "tween", duration: 1, easings: ["easeOut"] }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={`${classes.lHG} mx-3 ${classes.centerCard} notSelectable`}
    >
      <img
        className={`w-full h-full object-contain`}
        src={divderImg}
        alt="divider"
      />
    </motion.div>
  );
};

export default TimelineDivider;
