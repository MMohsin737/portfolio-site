// UI Widgets
import HeroImage from "../../ui/hero-Image/HeroImage";
import SocialIcon from "../../ui/social-icons/SocialIcon";
import HeroTextConent from "../../ui/hero-text-content/HeroTextContent";
import HeroScrollDownButton from "../../ui/hero-scroll-down-btn/HeroScrollDownButton";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Image
import image from "../../../assets/images/hero-image.png";

const Hero = ({ sectionID, children }) => {
  return (
    // <div
    //   id={sectionID}
    //   className={`flex flex-col mt-12 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5 items-center`}
    // >
    <div
      id={sectionID}
      className={`flex flex-col mt-12 mx-auto md:container container px-5 items-center`}
    >
      <div className={`w-full`}>{children}</div>

      <div
        className={`w-full mt-10 h-full flex md:flex-row flex-col-reverse justify-between items-center`}
      >
        <div className={`flex-1 flex flex-col justify-center items-start`}>
          <HeroTextConent />

          <div
            className={`flex flex-row w-full md:justify-start justify-center mb-8`}
          >
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={`mr-3`}
              type="LinkedIn"
              onPressed={() => {}}
            />
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={`mr-3`}
              type="GitHub"
              onPressed={() => {}}
            />
            <SocialIcon
              styleClasses={`w-8 h-8`}
              styleSpacing={``}
              type="Behance"
              onPressed={() => {}}
            />
          </div>

          <div
            className={`flex flex-row w-full md:justify-start justify-center`}
          >
            <CtaBtnV1
              title="See My Work"
              customStyle={`mr-5 2xl:text-xl xl:text-xl lg:text-xl text-sm`}
              onPressed={() => {}}
            />
            <CtaBtnV1
              title="Lets's Talk"
              customStyle={`2xl:text-xl xl:text-xl lg:text-xl text-sm`}
              onPressed={() => {}}
            />
          </div>
        </div>

        <div className={`md:w-1/2 w-full md:pb-0 mb-10`}>
          <div className={`w-4/6 ml-auto`}>
            <HeroImage imageSrc={image} />
          </div>
        </div>
      </div>

      {/* <HeroScrollDownButton /> */}
    </div>
  );
};

export default Hero;
