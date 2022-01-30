// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Image
import aboutMeImage from "../../../assets/images/about-me-image.svg";

// File
import Resume from "../../../assets/download/Muhammad_Mohsin.pdf";

const AboutMe = ({ sectionID }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  const animVariantImage = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  const animVariantContent = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const downloadFile = () => {
    const downloadElement = document.createElement("a");
    downloadElement.download = "Muhammad Mohsin";
    downloadElement.href = Resume;
    downloadElement.style.display = "none";
    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement);
  };

  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div
      id={sectionID}
      className={`mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}
    >
      <SectionHeading title="About Me" />

      <div
        className={`w-full flex 2xl:flex-row xl:flex-row lg:flex-row flex-col`}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          transition={{ type: "tween", duration: 1, ease: ["easeInOut"] }}
          animate={controls}
          variants={animVariantImage}
          className={`lg:w-1/2 md:w-3/5 w-full lg:mx-0 mx-auto lg:mb-0 mb-6`}
        >
          <div className={`w-11/12 mx-auto`}>
            <img
              className={`w-full h-full object-contain`}
              src={aboutMeImage}
              alt="illustration"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          transition={{ type: "tween", duration: 1, ease: ["easeInOut"] }}
          animate={controls}
          variants={animVariantContent}
          className={`lg:w-1/2 w-full flex flex-col justify-center items-start font-light text-justify lg:ml-5 ml-0`}
        >
          <p className={`text-lg leading-8 text-white`}>
            Innovative Front End Developer with 2 years experience building and
            maintaining responsive websites in the recruiting industry.
            Proficient in HTML, CSS, JavaScript, Dart, React and Flutter; plus
            modern libraries and frameworks. Passionate about usability and
            possess working knowledge of Adobe Photoshop & Figma. Experience has
            taught me to take accessibility and responsiveness seriously. I
            possess a positive “can-do” attitude where I am able to walk the
            extra mile in order to get the job done.
          </p>

          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ delay: 1, type: "spring", duration: 1, mass: 2 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
            className={`p-3 mt-5 lg:mx-0 mx-auto`}
          >
            <CtaBtnV1
              title="Download Resume"
              customStyle={``}
              onPressed={() => downloadFile()}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
