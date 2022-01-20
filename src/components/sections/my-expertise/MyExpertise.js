// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import SectionDivider from "../../ui/section-divider/SectionDivider";

// Styling
import classes from "./MyExpertise.module.css";

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

const MyExpertise = ({ sectionID }) => {
  const designIcons = [figma, xd, ai, ps, blender];
  const developmentIcons = [
    antUIdesign,
    materialUI,
    tailwindCSS,
    bootstrap,
    css3,
    html5,
    jsIcon,
    flutter,
    dart,
    expressIcon,
    nodeIcon,
    reactJSicon,
  ];

  return (
    <div
      id={sectionID}
      className={`mt-14 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="My" subtitle="Expertise" />

      <div
        className={`w-full flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-start`}
      >
        {/* Design Icons */}
        <div className={`flex-1`}>
          <h6
            className={`uppercase text-white text-4xl text-center font-light`}
          >
            Design
          </h6>

          <div className={`mt-10 w-96 mx-auto grid grid-cols-3 gap-4`}>
            {designIcons.map((item, index) => {
              if (index === 0) {
                return (
                  <div className={`w-12 mx-auto my-5`}>
                    <img
                      className={`w-full h-full object-contain`}
                      src={item}
                      alt=""
                    />
                  </div>
                );
              } else {
                return (
                  <div className={`w-20 mx-auto my-5`}>
                    <img
                      className={`w-full h-full object-contain`}
                      src={item}
                      alt=""
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>

        <SectionDivider
          dividerHeight={`my-auto ${classes["height-520px"]}`}
          customStyle={`xl:block lg:block md:block hidden`}
        />

        {/* Development Icons */}
        <div className={`flex-1`}>
          <h6
            className={`uppercase text-white text-4xl text-center font-light`}
          >
            Development
          </h6>

          <div className={`mt-10 w-3/4 mx-auto grid grid-cols-3 gap-4`}>
            {developmentIcons.map((item, index) => {
              return (
                <div className={`w-20 mx-auto my-5`}>
                  <img
                    className={`w-full h-full object-contain`}
                    src={item}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
