// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CompanyExpCard from "../../ui/company-exp-card/CompanyExpCard";
import Divider from "../../ui/divider/Divider";

// Styling
import classes from "./ProfessionalExperince.module.css";

// Image
import cipherSavvy from "../../../assets/images/cipher-savvy-logo.svg";
import overRoot from "../../../assets/images/over-root-logo.png";

const ProfessionalExperince = ({ sectionID }) => {
  return (
    <div
      id={sectionID}
      className={`mt-24 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="Professional" subtitle="Experince" />

      {/* Cipher Savvy */}
      <div className={`flex flex-row justify-center`}>
        <div className={`flex flex-col justify-between items-end mr-4`}>
          <CompanyExpCard
            imgSrc={cipherSavvy}
            jobTitle="Software Engineer"
            companyTitle="Cipher Savvy"
            location="Rawalpindi, Pakistan"
            dateJoiningEnding="2021 - Current"
            backgroundColor="red"
            spacingStyle=""
          />

          <div className={`flex-1 ${classes["mt-top-144px"]}`}>
            <span
              className={`text-white opacity-40 tracking-widest font-light`}
            >
              2018
            </span>
          </div>
        </div>

        <Divider customStyle={`h-96 mt-36`} />

        {/* Overroot */}
        <div className={`ml-4`}>
          <div className={`flex-1 ${classes["mt-top-151px"]}`}>
            <span
              className={`text-white opacity-40 tracking-widest font-light`}
            >
              2022
            </span>
          </div>

          <CompanyExpCard
            imgSrc={overRoot}
            jobTitle="Software Engineer"
            companyTitle="Overroot"
            location="Rawalpindi, Pakistan"
            dateJoiningEnding="2018 - 2021"
            backgroundColor="white"
            spacingStyle={`${classes["mt-top-171px"]}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperince;
