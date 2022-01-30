// UI Widgets
import SectionDivider from "../../ui/section-divider/SectionDivider";
import SectionHeading from "../../ui/section-heading/SectionHeading";
import EducationCard from "../../ui/education-card/EducationCard";

// Images
import szabistIcon from "../../../assets/images/szabist-icon.png";
import iqraIcon from "../../../assets/images/iqra-icon.png";
import udemyIcon from "../../../assets/images/udemy-icon.svg";
import courseraIcon from "../../../assets/images/coursera-icon.svg";

// Styling
import classes from "./Education.module.css";

const Education = ({ sectionID }) => {
  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div id={sectionID} className={`mt-28 mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}>
      <SectionHeading title="Education" />

      <div
        className={`w-full flex lg:flex-row flex-col justify-center items-start lg:mb-0 mb-96 ${classes["height-360px"]}`}
      >
        {/* Academic */}
        <div className={`flex-1 flex flex-col lg:w-full md:w-4/5 w-full mx-auto`}>
          <h6 className={`uppercase text-white md:text-3xl text-2xl text-center md:font-light font-normal`}>Academic</h6>

          <div className={`mt-14 h-full flex-1 flex flex-col justify-between items-center`}>
            <EducationCard
              cardType="academic"
              icon={szabistIcon}
              title={"MS - Data Science".toUpperCase()}
              instituteName="SZABIST"
              joiningPassing="2019 to 2021"
              info="Data Visualization - Big Data Analytics"
              certificateURL=""
              customSpacing={`top-0`}
            />

            <EducationCard
              cardType="academic"
              icon={iqraIcon}
              title={"BS - Computer Science".toUpperCase()}
              instituteName="IQRA University"
              joiningPassing="2014 to 2018"
              info="Game Development - Application Development"
              certificateURL=""
              customSpacing={`${classes["top-100"]}`}
            />
          </div>
        </div>

        <SectionDivider
          dividerHeight={`my-auto`}
          customStyle={`xl:block lg:block lg:block hidden xl:mx-0 mx-4 ${classes["height-250px"]}`}
        />

        {/* Certificates */}
        <div className={`flex-1 flex flex-col lg:w-full md:w-4/5 w-full mx-auto lg:mt-0 mt-44`}>
          <h6 className={`uppercase text-white md:text-3xl text-2xl text-center md:font-light font-normal`}>Certificates</h6>

          <div className={`mt-14 h-full flex-1 flex flex-col justify-between items-center`}>
            <EducationCard
              cardType="certificate"
              icon={udemyIcon}
              title="Flutter & Dart - The Complete Guide [2020 Edition]"
              instituteName="Udemy"
              joiningPassing={"Aug 2020".toUpperCase()}
              info="UC-3cd983fc-871c-42eb-9a5d-4be074525395"
              certificateURL="http://ude.my/UC-3cd983fc-871c-42eb-9a5d-4be074525395"
              customSpacing={`top-0`}
            />

            <EducationCard
              cardType="certificate"
              icon={udemyIcon}
              title="Learn Photoshop, Web Design & Profitable Freelancing"
              instituteName="Udemy"
              joiningPassing={"May 2020".toUpperCase()}
              info="UC-20b35940-81d1-44bf-a640-a51836471b77"
              certificateURL="https://ude.my/UC-20b35940-81d1-44bf-a640-a51836471b77"
              customSpacing={`${classes["top-100"]}`}
            />

            <EducationCard
              cardType="certificate"
              icon={courseraIcon}
              title="User Research and Design"
              instituteName="Coursera"
              joiningPassing={"Aug 2020".toUpperCase()}
              info="93CR7GXEJQPZ"
              certificateURL="https://coursera.org/verify/93CR7GXEJQPZ"
              customSpacing={`${classes["top-200"]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
