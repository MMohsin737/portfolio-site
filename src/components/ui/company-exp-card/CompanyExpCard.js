// Styling
import classes from "./CompanyExpCard.module.css";

// mage
import locatonIcon from "../../../assets/images/office-icon.svg";
import calenderIcon from "../../../assets/images/calender-icon.svg";

const CompanyExpCard = ({
  imgSrc,
  jobTitle,
  companyTitle,
  location,
  dateJoiningEnding,
  backgroundColor,
  spacingStyle,
}) => {
  const titleBG =
    backgroundColor.toLowerCase() === "red"
      ? classes.redTitleBG
      : classes.whiteTitleBG;

  const bodyBG =
    backgroundColor.toLowerCase() === "red"
      ? classes.redBodyBG
      : classes.whiteBodyBG;

  return (
    <div className={`${classes.card} ${spacingStyle} w-80`}>
      <div
        className={`${classes.cardTitle} ${titleBG} ${classes.topRounded} p-10 h-40`}
      >
        <img
          className={`w-full h-full object-contain`}
          src={imgSrc}
          alt={companyTitle}
        />
      </div>
      <div
        className={`${classes.cardBody} ${bodyBG} ${classes.bottomRounded} text-white p-3`}
      >
        <h4
          className={`text-center text-xl font-light tracking-wide uppercase`}
        >
          {jobTitle}
        </h4>

        {/* Company Name and Location */}
        <div className={`mt-6 flex flex-row justify-start items-center`}>
          <div className={`w-10 h-10`}>
            <img
              className={`w-full h-full object-contain`}
              src={locatonIcon}
              alt=""
            />
          </div>
          <div className={`ml-2`}>
            <h6>{companyTitle}</h6>
            <h6>{location}</h6>
          </div>
        </div>

        {/* Joining Date and Leaving Date */}
        <div className={`mt-6 flex flex-row justify-start items-center mb-2`}>
          <div className={`w-10 h-10`}>
            <img
              className={`w-full h-full object-contain`}
              src={calenderIcon}
              alt=""
            />
          </div>
          <div className={`ml-2`}>
            <h6>{dateJoiningEnding}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyExpCard;
