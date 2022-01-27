// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";

// import CtaBtnV2 from "../../ui/cta-btn-v2/CtaBtnV2";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Image
import aboutMeImage from "../../../assets/images/about-me-image.png";

// File
import Resume from "../../../assets/download/Muhammad_Mohsin.pdf";

const AboutMe = ({ sectionID }) => {
  const downloadFile = () => {
    const downloadElement = document.createElement("a");

    downloadElement.download = "Muhammad Mohsin";

    downloadElement.href = Resume;

    downloadElement.style.display = "none";

    document.body.appendChild(downloadElement);

    downloadElement.click();

    document.body.removeChild(downloadElement);
  };

  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div
      id={sectionID}
      className={`mt-28 mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}
    >
      <SectionHeading title="About Me" />

      <div
        className={`w-full flex 2xl:flex-row xl:flex-row lg:flex-row flex-col`}
      >
        <div className={`lg:w-1/2 w-full  lg:mb-0 mb-6`}>
          <div className={`w-9/12 mx-auto`}>
            <img
              className={`w-full h-full object-contain`}
              src={aboutMeImage}
              alt="illustration"
            />
          </div>
        </div>

        <div
          className={`lg:w-1/2 w-full flex flex-col justify-center items-start font-light text-justify lg:ml-5 ml-0`}
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

          <div className={`p-3 mt-5 lg:mx-0 mx-auto`}>
            <CtaBtnV1
              title="Download Resume"
              customStyle={``}
              onPressed={() => downloadFile()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
