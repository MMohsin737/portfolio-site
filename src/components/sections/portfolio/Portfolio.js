// Hooks
import { useEffect } from "react";

// Plugin
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Styling
import classes from "./Portfolio.module.css";

// Images
import ElysiumSols from "../../../assets/images/elysium_sol.jpg";
import ExhangeRateApp from "../../../assets/images/exchange_app.jpg";
import SwiftTraning from "../../../assets/images/swift_traning.jpg";
import EBookGuard from "../../../assets/images/ebook_guard.jpg";
import Critic from "../../../assets/images/critic.jpg";

const Portfolio = ({ sectionID }) => {
  const scaleImg = classes.enlarge;
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const myProjets = [
    {
      name: "Elysium Sols",
      thumbnail: ElysiumSols,
      liveLink: "https://elysiumsols.com/",
      designLink:
        "https://www.behance.net/gallery/130524295/Tech-Company-Landing-Page",
    },
    {
      name: "Exhange Rate App",
      thumbnail: ExhangeRateApp,
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/105463953/Exchange-Rate-Mobile-Application",
    },
    {
      name: "Swift Traning",
      thumbnail: SwiftTraning,
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/97051517/Professional-Training-Providing-Firm-Landing-Page",
    },
    {
      name: "E-Book Guard",
      thumbnail: EBookGuard,
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/96994401/Landing-Page-%28eBookGuard%29",
    },
    {
      name: "Critic",
      thumbnail: Critic,
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/96175207/Crtic-%28Design-Work-Review-Site%29",
    },
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
      <SectionHeading title="Portfolio" />

      <div
        className={`w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5`}
      >
        {myProjets.map((item, index, _) => (
          <motion.div
            key={index}
            initial="hidden"
            transition={{
              delay: index / 1.5,
              type: "tween",
              ease: ["easeInOut"],
              duration: 1,
            }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={`w-full overflow-hidden relative ${classes.roundBorder} ${classes.parentHover}`}
          >
            <img
              className={`w-full h-auto object-fill ${index === 1 && scaleImg}`}
              src={item.thumbnail}
              alt=""
            />
            <div className={`${classes.mainContentDiv}`}>
              <div className={`${classes.hoverDiv}`}>
                <h4 className={`${classes.hoverDivTitle}`}>{item.name}</h4>
                <div className={`${classes.hoverDivBtns}`}>
                  <a
                    target="_blank"
                    className={`bg-transparent text-white text-sm mt-1`}
                    href={item.designLink}
                    rel="noreferrer"
                  >
                    View Design
                  </a>

                  {item.liveLink !== "" && (
                    <div className={`${classes.lineDivider}`}></div>
                  )}

                  {item.liveLink !== "" && (
                    <a
                      target="_blank"
                      className={`bg-transparent text-white text-sm mt-1`}
                      href={item.liveLink}
                      rel="noreferrer"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex flex-row items-center justify-center mt-8">
        <motion.div
          key="CTA_BTN_PORTFOLIO_1"
          initial="hidden"
          animate={controls}
          transition={{
            delay: 3,
            type: "tween",
            duration: 1,
            ease: ["easeInOut"],
          }}
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
        >
          <CtaBtnV1
            title="More Projetcs"
            // customStyle={`mr-9`}
            customStyle={``}
            onPressed={() =>
              window
                .open("https://www.behance.net/muhammadmohsin6", "_blank")
                .focus()
            }
          />
        </motion.div>

        {/* <motion.div
          key="CTA_BTN_PORTFOLIO_2"
          initial="hidden"
          animate={controls}
          transition={{
            delay: 2.5,
            type: "tween",
            duration: 1,
            ease: ["easeInOut"],
          }}
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
        >
          <CtaBtnV1
            title="More Live Projets"
            customStyle={``}
            onPressed={() =>
              window.open("https://github.com/MMohsin737", "_blank").focus()
            }
          />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Portfolio;
