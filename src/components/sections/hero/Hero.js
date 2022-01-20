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
    <div
      id={sectionID}
      className={`h-screen flex flex-col py-10 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5 items-center`}
    >
      <div className={`w-full`}>{children}</div>

      <div
        className={`mt-10 h-full grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 grid-cols-1
        2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-rows-2 gap-4`}
      >
        <div className={`flex-1 flex flex-col justify-center items-start`}>
          <HeroTextConent />

          <div className={`flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-row justify-between mt-3 `}>
            <SocialIcon styleClasses={`w-7 h-7`} styleSpacing={`2xl:mr-4 xl:mr-4 lg:mr-4 md:mt-2 mr-4`} type="LinkedIn" onPressed={() => {}} />
            <SocialIcon styleClasses={`w-7 h-7`} styleSpacing={`2xl:mr-4 xl:mr-4 lg:mr-4 md:mt-2 mr-4`} type="GitHub" onPressed={() => {}} />
            <SocialIcon styleClasses={`w-7 h-7`} styleSpacing={`2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-2 mt-0`} type="behance" onPressed={() => {}} />
          </div>

          <div className={`flex flex-row justify-between mt-6`}>
            <CtaBtnV1 title="See My Work" customStyle={`mr-5 2xl:text-xl xl:text-xl lg:text-xl text-sm`} onPressed={() => {}} />
            <CtaBtnV1 title="Lets's Talk" customStyle={`2xl:text-xl xl:text-xl lg:text-xl text-sm`} onPressed={() => {}} />
          </div>
        </div>

        <HeroImage imageSrc={image} />
      </div>

      <HeroScrollDownButton />
    </div>
  );
};

export default Hero;
