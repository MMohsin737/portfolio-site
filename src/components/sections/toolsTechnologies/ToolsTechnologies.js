// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import SectionDivider from "../../ui/section-divider/SectionDivider";

// Styling
import classes from "./ToolsTechnologies.module.css";
import "../../../theme/utilities.css";

// Image
import figma from "../../../assets/images/figma-icon.svg";
import xd from "../../../assets/images/xd-icon.svg";
import ai from "../../../assets/images/illustrator-icon.svg";
import ps from "../../../assets/images/photoshop-icon.svg";
import blender from "../../../assets/images/blender-icon.svg";
import antUIdesign from "../../../assets/images/ant-design-ui.svg";
import materialUI from "../../../assets/images/material-ui.svg";
import tailwindCSS from "../../../assets/images/tailwind-css.svg";
import bootstrap from "../../../assets/images/bootstrap.svg";
import css3 from "../../../assets/images/css-3.svg";
import html5 from "../../../assets/images/html-5.svg";
import jsIcon from "../../../assets/images/javascript.svg";
import flutter from "../../../assets/images/flutter.svg";
import dart from "../../../assets/images/dart.svg";
import expressIcon from "../../../assets/images/express-js.svg";
import nodeIcon from "../../../assets/images/node-js.svg";
import reactJSicon from "../../../assets/images/react-js.svg";

const ToolsTechnologies = ({ sectionID }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const designIcons = [figma, xd, ai, ps, blender];
  const developmentIcons = [
    antUIdesign,
    materialUI,
    tailwindCSS,
    bootstrap,
    css3,
    html5,
    jsIcon,
    nodeIcon,
    expressIcon,
    reactJSicon,
    flutter,
    dart,
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div
      id={sectionID}
      ref={ref}
      className={`mt-28 mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}
    >
      <SectionHeading title="Technologies" subtitle="" />

      <div
        className={`mx-auto w-full flex lg:flex-row flex-col justify-center lg:items-start items-center`}
      >
        {/* Design Icons */}
        <div className={`flex-1 md:w-4/5 w-full`}>
          <h6
            className={`uppercase text-white md:text-3xl text-2xl text-center md:font-light font-normal`}
          >
            Design
          </h6>

          <div
            className={`md:mt-5 mt-1 lg:w-4/5 w-full mx-auto grid grid-cols-5 gap-1 notSelectable`}
          >
            {designIcons.map((item, index) => {
              if (index === 0) {
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    transition={{
                      type: "spring",
                      mass: 2,
                    }}
                    animate={controls}
                    variants={{
                      visible: { scale: 1 },
                      hidden: { scale: 0 },
                    }}
                    className={`w-8 mx-auto my-5`}
                  >
                    <img
                      className={`w-full h-full object-contain`}
                      src={item}
                      alt=""
                    />
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    transition={{

                      delay: index / 5,
                      type: "spring",
                      mass: 2,
                    }}
                    animate={controls}
                    variants={{
                      visible: { scale: 1 },
                      hidden: { scale: 0 },
                    }}
                    className={`w-14 mx-auto my-5`}
                  >
                    <img
                      className={`w-full h-full object-contain`}
                      src={item}
                      alt=""
                    />
                  </motion.div>
                );
              }
            })}
          </div>
        </div>

        <SectionDivider
          dividerHeight={`my-auto ${classes["height-260px"]}`}
          customStyle={`lg:block hidden`}
        />

        {/* Development Icons */}
        <div className={`flex-1 md:w-4/5 w-full lg:mt-0 mt-8`}>
          <h6
            className={`uppercase text-white md:text-3xl text-2xl text-center md:font-light font-normal`}
          >
            Development
          </h6>

          <div
            className={`md:mt-5 mt-1 lg:w-4/5 w-full mx-auto grid grid-cols-5 gap-1 notSelectable`}
          >
            {developmentIcons.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  transition={{
                    delay: index / 5,
                    type: "spring",
                    mass: 2,
                  }}
                  animate={controls}
                  variants={{
                    visible: { scale: 1 },
                    hidden: { scale: 0 },
                  }}
                  className={`w-14 mx-auto my-5`}
                >
                  <img
                    className={`w-full h-full object-contain`}
                    src={item}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsTechnologies;
