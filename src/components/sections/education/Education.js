// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import SectionDivider from "../../ui/section-divider/SectionDivider";
import SectionHeading from "../../ui/section-heading/SectionHeading";
import EducationCard from "../../ui/education-card/EducationCard";

// Images
import szabistIcon from "../../../assets/images/szabist-icon.png";
import iqraIcon from "../../../assets/images/iqra-icon.png";
import udemyIcon from "../../../assets/images/udemy-icon.svg";
import courseraIcon from "../../../assets/images/coursera-icon.svg";

// Styling
import classes from "./Education.module.css";

const Education = ({ sectionID }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  const animVariantLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  const animVariantRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

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
      <SectionHeading title="Education" />

      <div
        className={`w-full flex lg:flex-row flex-col justify-center items-start ${classes["height-360px"]}`}
      >
        {/* Academic */}
        <div
          className={`flex-1 flex flex-col lg:w-full md:w-4/5 w-full mx-auto`}
        >
          <h6
            className={`uppercase text-white md:text-3xl text-2xl text-center md:font-light font-normal mb-3`}
          >
            Academic
          </h6>

          <div
            className={`h-full flex-1 flex flex-col justify-between items-center`}
          >
            <motion.div
              initial="hidden"
              transition={{ type: "tween", duration: 1, ease: ["easeOut"] }}
              animate={controls}
              variants={animVariantLeft}
              className={`w-full`}
            >
              <EducationCard
                cardType="academic"
                icon={szabistIcon}
                title={"MS - Data Science".toUpperCase()}
                instituteName="SZABIST"
                joiningPassing="2019 to 2021"
                info="Data Visualization - Big Data Analytics"
                certificateURL=""
                customSpacing={`mx-auto`}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              transition={{
                delay: 0.5,
                type: "tween",
                duration: 1,
                ease: ["easeOut"],
              }}
              animate={controls}
              variants={animVariantLeft}
              className={`w-full`}
            >
              <EducationCard
                cardType="academic"
                icon={iqraIcon}
                title={"BS - Computer Science".toUpperCase()}
                instituteName="IQRA University"
                joiningPassing="2014 to 2018"
                info="Game Development - Application Development"
                certificateURL=""
                customSpacing={`mt-3 mx-auto`}
              />
            </motion.div>
          </div>
        </div>

        <SectionDivider
          dividerHeight={`my-auto`}
          customStyle={`xl:block lg:block lg:block hidden xl:mx-0 mx-4 ${classes["height-250px"]}`}
        />

        {/* Certificates */}
        <div
          className={`flex-1 flex flex-col lg:w-full md:w-4/5 w-full mx-auto lg:mt-0 mt-12`}
        >
          <h6
            className={`uppercase text-white md:text-3xl text-2xl text-center md:font-light font-normal mb-3`}
          >
            Certificates
          </h6>

          <div
            className={`h-full flex-1 flex flex-col justify-between items-center`}
          >
            <motion.div
              initial="hidden"
              transition={{
                type: "tween",
                duration: 1,
                ease: ["easeOut"],
              }}
              animate={controls}
              variants={animVariantRight}
              className={`w-full`}
            >
              <EducationCard
                cardType="certificate"
                icon={udemyIcon}
                title="Flutter & Dart - The Complete Guide [2020 Edition]"
                instituteName="Udemy"
                joiningPassing={"Aug 2020".toUpperCase()}
                info="UC-3cd983fc-871c-42eb-9a5d-4be074525395"
                certificateURL="http://ude.my/UC-3cd983fc-871c-42eb-9a5d-4be074525395"
                customSpacing={`mx-auto`}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              transition={{
                delay: 0.5,
                type: "tween",
                duration: 1,
                ease: ["easeOut"],
              }}
              animate={controls}
              variants={animVariantRight}
              className={`w-full`}
            >
              <EducationCard
                cardType="certificate"
                icon={udemyIcon}
                title="Learn Photoshop, Web Design & Profitable Freelancing"
                instituteName="Udemy"
                joiningPassing={"May 2020".toUpperCase()}
                info="UC-20b35940-81d1-44bf-a640-a51836471b77"
                certificateURL="https://ude.my/UC-20b35940-81d1-44bf-a640-a51836471b77"
                customSpacing={`mt-3 mx-auto`}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              transition={{
                delay: 0.8,
                type: "tween",
                duration: 1,
                ease: ["easeOut"],
              }}
              animate={controls}
              variants={animVariantRight}
              className={`w-full`}
            >
              <EducationCard
                cardType="certificate"
                icon={courseraIcon}
                title="User Research and Design"
                instituteName="Coursera"
                joiningPassing={"Aug 2020".toUpperCase()}
                info="93CR7GXEJQPZ"
                certificateURL="https://coursera.org/verify/93CR7GXEJQPZ"
                customSpacing={`mt-3 mx-auto`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
