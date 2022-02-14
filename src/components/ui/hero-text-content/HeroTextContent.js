// Plugin
import { motion, useAnimation } from "framer-motion";

// UI Widgets

// Styling
import classes from "./HeroTextContent.module.css";

const HeroTextConent = () => {
  const controls = useAnimation();
  const animVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const itervalID = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(itervalID);
      controls.start("visible");
    }
  }, 1);

  return (
    <div className="w-full mb-8 lg:px-0 px-2">
      <motion.h1
        initial="hidden"
        animate={controls}
        transition={{
          delay: 0.5,
          type: "tween",
          duration: 1,
          ease: ["easeOut"],
        }}
        variants={animVariants}
        className={`${classes.mainTitle} text-white font-light lg:text-left text-center`}
      >
        Hi! I am{" "}
        <span className={`font-bold uppercase ${classes["text-Primary-Color"]}`}>
          Mohsin
        </span>
      </motion.h1>
      <motion.h3
        initial="hidden"
        animate={controls}
        transition={{
          delay: 0.8,
          type: "tween",
          duration: 1,
          ease: ["easeOut"],
        }}
        variants={animVariants}
        className={`${classes.subTitle} leading-tight lg:text-left text-center text-white font-light`}
      >
        a{" "}
        <span className={`font-bold ${classes["text-Primary-Color"]}`}>
          self-taught
        </span>{" "}
        user interface &
        <motion.span
          initial="hidden"
          animate={controls}
          transition={{
            delay: 1.2,
            type: "tween",
            duration: 1,
            ease: ["easeOut"],
          }}
          variants={animVariants}
          className={`block w-full`}
        >
          user experince designer.
        </motion.span>
      </motion.h3>
    </div>
  );
};

export default HeroTextConent;
