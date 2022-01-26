// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import SocialIcon from "../../ui/social-icons/SocialIcon";

// Styling
import classes from "./LetsTalk.module.css";

const LetsTalk = ({ sectionID }) => {
  return (
    // <div
    //   id={sectionID}
    //   className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}
    // ></div>
    <div id={sectionID} className={`mt-28 mx-auto md:container container px-5`}>
      <SectionHeading title="Let's Talk" />

      <div className={`mt-14 text-white mx-auto font-light`}>
        <h4 className={`md:text-3xl text-base text-center`}>
          <a href="tel:+923335673270" className={`mx-auto ${classes.letterSpace3}`}>
            +92 (0)333 5673270
          </a>
        </h4>

        <h4 className={`md:text-3xl text-base text-center mt-5 font-light`}>
          <a href="email:muhammad.mohin.dev@gmail.com" className={`mx-auto ${classes.letterSpace3}`}>
            muhammad.mohin.dev@gmail.com
          </a>
        </h4>

        <div className={`flex flex-row mx-auto md:justify-center justify-center mb-8 mt-5`}>
          <SocialIcon styleClasses={`w-8 h-8`} styleSpacing={`mr-3`} type="LinkedIn" onPressed={() => {}} />
          <SocialIcon styleClasses={`w-8 h-8`} styleSpacing={`mr-3`} type="GitHub" onPressed={() => {}} />
          <SocialIcon styleClasses={`w-8 h-8`} styleSpacing={``} type="Behance" onPressed={() => {}} />
        </div>

        <h1 className={`uppercase text-6xl font-light text-center mt-24 ${classes.letterSpace3}`}>Thank You</h1>

        <div>
          <p className={`text-xs text-center uppercase mt-32 mb-3`}>Made with ❤️ by Muhammad Mohsin ©️ 2022 All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
