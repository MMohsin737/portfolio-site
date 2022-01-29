// Plugin
// import { motion } from "framer-motion";


// UI Widgets


// Styling
import classes from "./HeroTextContent.module.css";

const HeroTextConent = () => {
  // const mainHEading = "Hey, I'm";

  return (
    <div className="w-full mb-8">
      <h1
        className={`${classes.mainTitle} text-white font-light lg:text-left text-center`}
      >
        {" "}
        <span className={`font-bold ${classes["text-Primary-Color"]}`}>
          Mohsin
        </span>
      </h1>
      <h3
        className={`${classes.subTitle} leading-tight lg:text-left text-center text-white font-light`}
      >
        a{" "}
        <span className={`font-bold ${classes["text-Primary-Color"]}`}>
          self-taught
        </span>{" "}
        UI designer & <br /> front-end developer.
      </h3>
    </div>
  );
};

export default HeroTextConent;
