// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import HeroImage from "../../ui/hero-Image/HeroImage";
import SocialIcon from "../../ui/social-icons/SocialIcon";
import HeroTextConent from "../../ui/hero-text-content/HeroTextContent";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Utils
import { scrollTo } from "../../../utils/utils";

// Image
import image from "../../../assets/images/hero-image.png";

const Hero = ({ sectionID, children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    // <div
    //   id={sectionID}
    //   className={`flex flex-col mt-12 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5 items-center`}
    // >
    <div
      id={sectionID}
      className={`flex flex-col mt-12 mx-auto container 2xl:px-36 lg:px-32 px-5 items-center`}
    >
      <div className={`w-full mb-10`}>{children}</div>

      <div
        className={`w-full mt-10 h-full flex lg:flex-row flex-col-reverse justify-between items-center`}
      >
        <div className={`flex-1 flex flex-col justify-center items-start`}>
          <HeroTextConent />

          <div
            className={`flex flex-row w-full lg:justify-start justify-center mb-8`}
          >
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={`mr-3`}
              type="LinkedIn"
              linkToProfile={
                "https://www.linkedin.com/in/muhammad-mohsin-166112159/"
              }
            />
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={`mr-3`}
              type="GitHub"
              linkToProfile={"https://github.com/MMohsin737"}
            />
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={``}
              type="Behance"
              linkToProfile={"https://www.behance.net/muhammadmohsin6"}
            />
          </div>

          <div
            className={`flex flex-row w-full lg:justify-start justify-center p-3`}
          >
            <CtaBtnV1
              title="See My Work"
              customStyle={`mr-9`}
              onPressed={() => scrollTo("portfolio")}
            />
            <CtaBtnV1
              title="Lets's Talk"
              customStyle={``}
              onPressed={() => scrollTo("letsTalk")}
            />
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.5,  duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={`md:w-1/2 w-full lg:pb-0 mb-10 lg:mx-0 mx-auto p-3`}
        >
          <div className={`lg:w-4/6 w-full lg:ml-auto`}>
            <HeroImage imageSrc={image} />
          </div>
        </motion.div>
      </div>

      {/* <HeroScrollDownButton /> */}
    </div>
  );
};

export default Hero;
