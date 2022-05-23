// Plugin
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// UI Widgets
import HeroImage from "../../ui/hero-Image/HeroImage";
import SocialIcon from "../../ui/social-icons/SocialIcon";
import HeroTextConent from "../../ui/hero-text-content/HeroTextContent";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";
// import HeroScrollDownButton from "../../ui/hero-scroll-down-btn/HeroScrollDownButton";

// Utils
import { scrollTo } from "../../../utils/utils";

// Image
import image from "../../../assets/images/hero-image.jpg";

const Hero = ({ sectionID, children }) => {
  const controls = useAnimation();

  const itervalID = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(itervalID);
      controls.start("visible");
    }
  }, 1);

  return (
    // <div
    //   id={sectionID}
    //   className={`flex flex-col mt-12 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5 items-center`}
    // >
    <div
      id={sectionID}
      // className={`h-screen mb-8 flex flex-col mx-auto container 2xl:px-"36 lg:px-32 px-5 items-center`}
      className={`mb-8 flex flex-col mx-auto container 2xl:px-36 lg:px-32 px-5 items-center`}
    >
      <div className={`w-full mt-5 mb-5`}>{children}</div>

      <div
        className={`w-full flex-auto mt-5 py-2 flex lg:flex-row flex-col-reverse justify-between items-center`}
      >
        <div className={`flex-1 flex flex-col justify-center items-start`}>
          <HeroTextConent />

          <AnimatePresence>
            <div
              className={`w-full flex flex-col lg:justify-start justify-center items-start mb-8`}
            >
              <div className={`w-full flex flex-row lg:justify-start justify-center items-center`}>
                <motion.div
                  key="extSocioIconLink1"
                  initial="hidden"
                  animate={controls}
                  transition={{
                    delay: 1.5,
                    type: "spring",
                    duration: 2,
                    mass: 2,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -10 },
                  }}
                >
                  <SocialIcon
                    styleClasses={`xl:w-8 w-6 xl:h-8 h-6`}
                    styleSpacing={`mr-3`}
                    type="LinkedIn"
                    linkToProfile={
                      "https://www.linkedin.com/in/muhammad-mohsin-166112159/"
                    }
                  />
                </motion.div>

                <motion.div
                  key="extSocioIconLink3"
                  initial="hidden"
                  animate={controls}
                  transition={{
                    delay: 1.8,
                    type: "spring",
                    duration: 2,
                    mass: 2,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -10 },
                  }}
                >
                  <SocialIcon
                    styleClasses={`xl:w-8 w-6 xl:h-8 h-6`}
                    styleSpacing={``}
                    type="Behance"
                    linkToProfile={"https://www.behance.net/muhammadmohsin6"}
                  />
                </motion.div>
              </div>

              <div className={`mt-3 w-full flex flex-row lg:justify-start justify-center items-center`}>
                <motion.div
                  key="extSocioIconLink3"
                  initial="hidden"
                  animate={controls}
                  transition={{
                    delay: 2,
                    type: "spring",
                    duration: 2,
                    mass: 2,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -10 },
                  }}
                >
                  <SocialIcon
                    styleClasses={`xl:w-8 w-6 xl:h-8 h-6`}
                    styleSpacing={`mr-3`}
                    type="Dribbble"
                    linkToProfile={"https://dribbble.com/mmohsin737"}
                  />
                </motion.div>

                <motion.div
                  key="extSocioIconLink3"
                  initial="hidden"
                  animate={controls}
                  transition={{
                    delay: 2.2,
                    type: "spring",
                    duration: 2,
                    mass: 2,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -10 },
                  }}
                >
                  <SocialIcon
                    styleClasses={`xl:w-8 w-6 xl:h-8 h-6`}
                    styleSpacing={``}
                    type="ArtStation"
                    linkToProfile={"https://www.artstation.com/mmohsin"}
                  />
                </motion.div>
              </div>
            </div>
          </AnimatePresence>

          <div
            className={`flex flex-row w-full lg:justify-start justify-center p-3`}
          >
            <motion.div
              key="CTABTN1"
              initial="hidden"
              animate={controls}
              transition={{
                delay: 1.8,
                type: "tween",
                duration: 1,
                ease: ["easeInOut"],
              }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <CtaBtnV1
                title="See My Work"
                customStyle={`mr-9`}
                onPressed={() => scrollTo("portfolio")}
              />
            </motion.div>

            <motion.div
              key="CTABTN2"
              initial="hidden"
              animate={controls}
              transition={{
                delay: 2.1,
                type: "tween",
                duration: 1,
                ease: ["easeInOut"],
              }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <CtaBtnV1
                title="Lets's Talk"
                customStyle={``}
                onPressed={() => scrollTo("letsTalk")}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          transition={{ type: "tween", duration: 1, ease: ["easeOut"] }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={`xl:w-3/5 lg:w-96 md:w-2/5 w-9/12 lg:pb-0 mb-10 lg:mx-0 mx-auto p-3`}
        >
          <div className={`xl:w-4/6 lg:w-96 w-full lg:ml-auto`}>
            <HeroImage imageSrc={image} />
          </div>
        </motion.div>
      </div>

      {/* <div className={`flex-auto flex justify-center lg:opacity-100 opacity-0 items-center`}>
        <HeroScrollDownButton />
      </div> */}
    </div>
  );
};

export default Hero;
