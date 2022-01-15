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
        className={`mt-10 flex-grow-1  h-full flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse`}
      >
        <div className={`flex-1 flex flex-col justify-center items-start`}>
          <HeroTextConent />

          <div className={`flex flex-row justify-between mt-6`}>
            <SocialIcon
              styleClasses={`xl:w-9 xl:h-9 lg:w-9 lg:h-9 md:w-9 md:h-9 w-9 h-9`}
              styleSpacing={`mr-4`}
              type="LinkedIn"
              onPressed={() => {}}
            />
            <SocialIcon
              styleClasses={`xl:w-9 xl:h-9 lg:w-9 lg:h-9 md:w-9 md:h-9 w-9 h-9`}
              styleSpacing={`mr-4`}
              type="GitHub"
              onPressed={() => {}}
            />
            <SocialIcon
              styleClasses={`xl:w-9 xl:h-9 lg:w-9 lg:h-9 md:w-9 md:h-9 w-9 h-9`}
              styleSpacing={``}
              type="behance"
              onPressed={() => {}}
            />
          </div>

          <div className={`flex flex-row justify-between mt-6`}>
            <CtaBtnV1 title="See My Work" customStyle={`mr-5 text-2xl`} onPressed={() => {}} />
            <CtaBtnV1 title="Lets's Talk" customStyle={`text-2xl`} onPressed={() => {}} />
          </div>
        </div>

        <HeroImage imageSrc={image} />
      </div>

      <HeroScrollDownButton />
    </div>
  );
};

export default Hero;
