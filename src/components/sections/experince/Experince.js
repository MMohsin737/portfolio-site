// Hook
import { useState, useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CompanyExpCard from "../../ui/company-exp-card/CompanyExpCard";
import TimelineDivider from "../../ui/timeline-divider/TimelineDivider";

// Image
import cipherSavvyLogo from "../../../assets/images/cipher-savvy-logo.svg";
import microMerger from "../../../assets/images/micromerger.png";

// Styling
import classes from "./Experince.module.css";
import "../../../theme/utilities.css";

const Experince = ({ sectionID }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  window.addEventListener("resize", (event) => {
    setScreenWidth(event.currentTarget.innerWidth);
  });

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
      <SectionHeading title="Experince" />

      <div
        className={`flex md:flex-row flex-col items-center justify-center notSelectable`}
      >
        <div className={`flex flex-col`}>
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{
              delay: 1.5,
              type: "tween",
              duration: 1,
              ease: ["linear"],
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
          >
            <CompanyExpCard
              imgSrc={cipherSavvyLogo}
              jobTitle="Software Engineer"
              companyTitle="Cipher Savvy"
              location="Rawalpindi, Pakistan"
              dateJoiningEnding="2021 - Current"
              backgroundColor="red"
              spacingStyle={``}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            transition={{
              delay: 1,
              type: "tween",
              duration: 1,
              easings: ["easeOut"],
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 20 },
            }}
            className={`flex justify-end items-center ${classes.height320} ${classes.respDate}`}
          >
            <span
              className={`block h-fit w-fit text-lg text-gray-500 font-medium `}
            >
              2020
            </span>
          </motion.div>
        </div>

        {/* Divider */}
        {screenWidth > 600 && <TimelineDivider />}

        <div className={`flex flex-col h-max md:mt-0 mt-8`}>
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{
              delay: 1,
              type: "tween",
              duration: 1,
              easings: ["easeOut"],
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -20 },
            }}
            className={`flex justify-start items-center ${classes.height320} ${classes.respDate}`}
          >
            <span
              className={`block h-fit w-fit text-lg text-gray-500 font-medium mb-2`}
            >
              2022
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            transition={{
              delay: 1.5,
              type: "tween",
              duration: 1,
              ease: ["linear"],
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
          >
            <CompanyExpCard
              imgSrc={microMerger}
              jobTitle="UI/UX Designer"
              companyTitle="Micro Merger"
              location="Islamabad, Pakistan"
              dateJoiningEnding="2020 - 2021"
              backgroundColor="white"
              spacingStyle={``}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experince;
