// UI Widgets
import HeroImage from "../../ui/hero-Image/HeroImage";
import SocialIcon from "../../ui/social-icons/SocialIcon";

// Styling
import classes from "./Hero.module.css";

// Image
import image from "../../../assets/images/hero-image.png";

const Hero = ({ sectionID, children }) => {
  return (
    <div
      id={sectionID}
      className={`mt-10 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full`}
    >
      {children}
      <div className={`mt-10 flex flex-row`}>
        <div className={`flex-1 flex flex-col justify-center items-start`}>
          <div>
            <h1 className={`text-7xl text-white font-light`}>
              Hey, I'm{" "}
              <span className={`font-bold ${classes["text-Primary-Color"]}`}>
                Mohsin
              </span>
            </h1>
            <h3
              className={`text-5xl mr-5 mt-5 leading-tight text-white font-light`}
            >
              a{" "}
              <span className={`font-bold ${classes["text-Primary-Color"]}`}>
                self-taught
              </span>{" "}
              UI designer & front-end developer.
            </h3>
          </div>
          <SocialIcon styleClasses={`w-9 h-9`} />
        </div>
        <HeroImage imageSrc={image} />
      </div>
    </div>
  );
};

export default Hero;
