// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import SocialIcon from "../../ui/social-icons/SocialIcon";

// Styling
import classes from "./LetsTalk.module.css";

const LetsTalk = ({ sectionID }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    // <div
    //   id={sectionID}
    //   className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}
    // ></div>
    <div
      id={sectionID}
      ref={ref}
      className={`mt-28 mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}
    >
      <SectionHeading title="Let's Talk" />

      <div className={`mt-14 text-white mx-auto font-light`}>
        <motion.h4
          initial="hidden"
          transition={{
            type: "tween",
            ease: ["easeInOut"],
            duration: 1,
          }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          className={`md:text-3xl text-base text-center`}
        >
          <a
            href="tel:+923335673270"
            className={`mx-auto ${classes.letterSpace3}`}
          >
            +92 (0)333 5673270
          </a>
        </motion.h4>

        <motion.h4
          initial="hidden"
          transition={{
            type: "tween",
            ease: ["easeInOut"],
            duration: 1,
          }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
          }}
          className={`md:text-3xl text-base text-center mt-5 font-light`}
        >
          <a
            href="email:muhammad.mohin.dev@gmail.com"
            className={`mx-auto ${classes.letterSpace3}`}
          >
            muhammad.mohin.dev@gmail.com
          </a>
        </motion.h4>

        <div
          className={`flex flex-row mx-auto md:justify-center justify-center mb-8 mt-5`}
        >
          <motion.div
            initial="hidden"
            transition={{
              delay: 0.5,
              type: "tween",
              ease: ["easeInOut"],
              duration: 1,
            }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
          >
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={`mr-3`}
              type="LinkedIn"
              linkToProfile={
                "https://www.linkedin.com/in/muhammad-mohsin-166112159/"
              }
            />
          </motion.div>

          <motion.div
            initial="hidden"
            transition={{
              delay: 0.8,
              type: "tween",
              ease: ["easeInOut"],
              duration: 1,
            }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
          >
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={`mr-3`}
              type="GitHub"
              linkToProfile={"https://github.com/MMohsin737"}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            transition={{
              delay: 1.3,
              type: "tween",
              ease: ["easeInOut"],
              duration: 1,
            }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
          >
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={``}
              type="Behance"
              linkToProfile={"https://www.behance.net/muhammadmohsin6"}
            />
          </motion.div>
        </div>

        <motion.h1
          initial="hidden"
          transition={{
            delay: 1.6,
            type: "tween",
            ease: ["easeInOut"],
            duration: 1,
          }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={`uppercase text-6xl font-light text-center mt-24 ${classes.letterSpace3}`}
        >
          Thank You
        </motion.h1>

        <div>
          <p
            className={`${classes.rightsText} text-center uppercase mt-32 mb-3`}
          >
            Made with ❤️ by Muhammad Mohsin ©️ 2022 All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
