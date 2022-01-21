// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CompanyExpCard from "../../ui/company-exp-card/CompanyExpCard";
import TimelineDivider from "../../ui/timeline-divider/TimelineDivider";

// Image
import cipherSavvyLogo from "../../../assets/images/cipher-savvy-logo.svg";
import overrootLogo from "../../../assets/images/overroot-logo.png";

// Styling
import classes from "./Experince.module.css";

const Experince = ({ sectionID }) => {
  return (
    <div
      id={sectionID}
      className={`mt-24 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="Professional" subtitle="Experince" />

      <div className={`flex flex-row justify-center`}>
        <div className={`flex flex-col`}>
          <CompanyExpCard
            imgSrc={cipherSavvyLogo}
            jobTitle="Software Engineer"
            companyTitle="Cipher Savvy"
            location="Rawalpindi, Pakistan"
            dateJoiningEnding="2021 - Current"
            backgroundColor="red"
            spacingStyle={``}
          />

          <div className={`flex-grow flex justify-end`}>
            <span
              className={`block mt-auto text-lg text-gray-500 font-medium  ${classes["mt-bottom-140"]}`}
            >
              2018
            </span>
          </div>
        </div>

        {/* Divider */}
        <TimelineDivider barHeight="large" />

        <div className={`flex flex-col h-max`}>
          <div
            className={`flex-grow flex justify-start items-start ${classes["mt-bottom-90"]}`}
          >
            <span
              className={`block mt-auto text-lg text-gray-500 font-medium mb-2 ${classes["my-140"]}`}
            >
              2022
            </span>
          </div>
          <CompanyExpCard
            imgSrc={overrootLogo}
            jobTitle="Software Engineer"
            companyTitle="Overroot"
            location="Rawalpindi, Pakistan"
            dateJoiningEnding="2018 - 2021"
            backgroundColor="white"
            spacingStyle={``}
          />
        </div>
      </div>
    </div>
  );
};

export default Experince;
