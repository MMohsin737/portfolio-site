// Hook
import { useState } from "react";

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
  const [screenWidth, setScreenWidth] = useState(window.screen.width)

  window.addEventListener("resize", (event) => {
    setScreenWidth(event.currentTarget.innerWidth);
  });

  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div
      id={sectionID}
      className={`mt-28 mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}
    >
      <SectionHeading title="Experince" />

      <div className={`flex md:flex-row flex-col items-center justify-center`}>
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

          <div
            className={`flex justify-end items-center ${classes.height320} ${classes.respDate}`}
          >
            <span
              className={`block h-fit w-fit text-lg text-gray-500 font-medium `}
            >
              2018
            </span>
          </div>
        </div>

        {/* Divider */}
        {screenWidth > 600 && <TimelineDivider />}

        <div className={`flex flex-col h-max md:mt-0 mt-8`}>
          <div
            className={`flex justify-start items-center ${classes.height320} ${classes.respDate}`}
          >
            <span
              className={`block h-fit w-fit text-lg text-gray-500 font-medium mb-2`}
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
