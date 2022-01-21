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
    <div id={sectionID} className={`mt-24 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}>
      <SectionHeading title="Education &" subtitle="Certifications" />

      <div className={`w-full flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-start`}>
        {/* Academic */}
        <div className={`flex-1`}>
          <h6 className={`uppercase text-white text-3xl text-center font-light`}>Academic</h6>

          <div className={`mt-5`}>
            <EducationCard
              cardType="academic"
              icon={szabistIcon}
              title={"MS - Data Science".toUpperCase()}
              instituteName="SZABIST"
              joiningPassing="2019 to 2021"
              credentialID=""
              certificateURL=""
              customSpacing={`mb-4`}
            />

            <EducationCard
              cardType="academic"
              icon={iqraIcon}
              title={"MS - Data Science".toUpperCase()}
              instituteName="IQRA University"
              joiningPassing="2014 to 2018"
              credentialID=""
              certificateURL=""
              customSpacing={``}
            />
          </div>
        </div>

        <SectionDivider
          dividerHeight={`my-auto`}
          customStyle={`xl:block lg:block md:block hidden ${classes["height-250px"]}`}
        />

        {/* Certificates */}
        <div className={`flex-1`}>
          <h6 className={`uppercase text-white text-3xl text-center font-light`}>Certificates</h6>

          <div className={`mt-5`}>
            <EducationCard
              cardType="certificate"
              icon={udemyIcon}
              title="Flutter & Dart - The Complete Guide [2020 Edition]"
              instituteName="Udemy"
              joiningPassing={"Aug 2020".toUpperCase()}
              credentialID="UC-3cd983fc-871c-42eb-9a5d-4be074525395"
              certificateURL="http://ude.my/UC-3cd983fc-871c-42eb-9a5d-4be074525395"
              customSpacing={`mb-4`}
            />

            <EducationCard
              cardType="certificate"
              icon={udemyIcon}
              title="Learn Photoshop, Web Design & Profitable Freelancing"
              instituteName="Udemy"
              joiningPassing={"May 2020".toUpperCase()}
              credentialID="UC-20b35940-81d1-44bf-a640-a51836471b77"
              certificateURL="https://ude.my/UC-20b35940-81d1-44bf-a640-a51836471b77"
              customSpacing={`mb-4`}
            />

            <EducationCard
              cardType="certificate"
              icon={courseraIcon}
              title="User Research and Design"
              instituteName="Coursera"
              joiningPassing={"Aug 2020".toUpperCase()}
              credentialID="93CR7GXEJQPZ"
              certificateURL="https://coursera.org/verify/93CR7GXEJQPZ"
              customSpacing={``}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
