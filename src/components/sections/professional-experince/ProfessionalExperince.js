// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CompanyExpCard from "../../ui/company-exp-card/CompanyExpCard";

// Image
import divderImg from "../../../assets/images/divider-image.svg";
import cipherSavvyLogo from "../../../assets/images/cipher-savvy-logo.svg";
import overrootLogo from "../../../assets/images/overroot-logo.png";

const ProfessionalExperince = ({ sectionID }) => {
  return (
    <div
      id={sectionID}
      className={`mt-24 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="Professional" subtitle="Experince" />

      <div className={`flex flex-row justify-center`}>
        <CompanyExpCard
          imgSrc={cipherSavvyLogo}
          jobTitle="Software Engineer"
          companyTitle="Cipher Savvy"
          location="Rawalpindi, Pakistan"
          dateJoiningEnding="2021 - Current"
          backgroundColor="red"
        />

        {/* Divider */}
        <div className={`h-96`}>
          <img
            className={`w-full h-full object-contain`}
            src={divderImg}
            alt="divider"
          />
        </div>

        <CompanyExpCard
          imgSrc={overrootLogo}
          jobTitle="Software Engineer"
          companyTitle="Overroot"
          location="Rawalpindi, Pakistan"
          dateJoiningEnding="2018 - 2021"
          backgroundColor="white"
        />
      </div>
    </div>
  );
};

export default ProfessionalExperince;
