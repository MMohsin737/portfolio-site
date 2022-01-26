// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CtaBtnV2 from "../../ui/cta-btn-v2/CtaBtnV2";

// Image
import aboutMeImage from "../../../assets/images/about-me-image.png";

const AboutMe = ({ sectionID }) => {
  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div id={sectionID} className={`mt-28 mx-auto md:container container px-5`}>
      <SectionHeading title="About Me" />

      <div
        className={`w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col`}
      >
        <div className={`md:w-1/2 w-full  md:mb-0 mb-6`}>
          <div className={`w-9/12 mx-auto`}>
            <img
              className={`w-full h-full object-contain`}
              src={aboutMeImage}
              alt="illustration"
            />
          </div>
        </div>

        <div
          className={`md:w-1/2 w-full flex flex-col justify-center items-start font-light text-justify md:ml-5 ml-0`}
        >
          <p className={`text-lg leading-8 text-white`}>
            Innovative Front End Developer with 2 years experience building and
            maintaining responsive websites in the recruiting industry.
            Proficient in HTML, CSS, JavaScript, Dart, React and Flutter; plus
            modern libraries and frameworks. Passionate about usability and
            possess working knowledge of Adobe Photoshop & Figma. Experience has
            taught me to take accessibility and responsiveness seriously. I
            possess a positive “can-do” attitude where I am able to walk the
            extra mile in order to get the job done.
          </p>

          <CtaBtnV2
            customStyle={`mt-4 md:mx-0 mx-auto`}
            title="Download Resume"
            onPressed={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
