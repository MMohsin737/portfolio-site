// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CtaBtnV2 from "../../ui/cta-btn-v2/CtaBtnV2";

// Image
import aboutMeImage from "../../../assets/images/about-me-image.png";

const AboutMe = ({ sectionID }) => {
  return (
    <div
      id={sectionID}
      className={`mt-14 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="About" subtitle="Me" />

      <div
        className={`flex xl:flex-row lg:flex-row md:flex-row flex-col items-center justify-between`}
      >
        <div className={`w-2/5 mr-10`}>
          <img
            className={`w-full h-full object-contain`}
            src={aboutMeImage}
            alt="illustration"
          />
        </div>

        <div
          className={`w-1/2 flex-grow flex flex-col justify-center items-center text-xl text-white font-light text-justify leading-relaxed`}
        >
          <p>
            I possess a positive “can-do” attitude where I am able to walk the
            extra mile in order to get the job done. I am also creative and
            self-motivated, where I am able to work efficiently and effectively
            at work. Opportunity that will allow me to utilize my
            problem-solving skills and attention to detail will help me in
            further development of my abilities in the field of Computer
            Science.
          </p>

          <CtaBtnV2
            customStyle={`mt-4`}
            title="Download Resume"
            onPressed={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
