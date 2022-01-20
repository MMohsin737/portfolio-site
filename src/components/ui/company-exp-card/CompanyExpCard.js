// Styling
import classes from "./CompanyExpCard.module.css";

const CompanyExpCard = ({
  imgSrc,
  jobTitle,
  companyTitle,
  location,
  dateJoiningEnding,
  backgroundColor,
  spacingStyle
}) => {
  const icoBG =
    backgroundColor.toLowerCase() === "red"
      ? classes.redIconBG
      : classes.whiteIconBG;
  const cardBG =
    backgroundColor.toLowerCase() === "red"
      ? classes.redBodyBG
      : classes.whiteBodyBG;

  return (
    <div className={`w-72 ${spacingStyle}`}>
      <div className={`h-40 ${icoBG} flex justify-center items-center`}>
        <div className={`w-16`}>
          <img
            className={`w-full h-full object-contain`}
            src={imgSrc}
            alt={companyTitle}
          />
        </div>
      </div>
      <div className={`${cardBG} py-1 px-3`}>
        <h4 className={`text-center text-white text-xl font-normal uppercase`}>{jobTitle}</h4>
        <div className={`text-white my-5 text-base`}>
          <span className={`block`}>{companyTitle}</span>
          <span className={`block`}>{location}</span>
        </div>
        <span className={`text-white text-base mb-3 block`}>{dateJoiningEnding}</span>
      </div>
    </div>
  );
};

export default CompanyExpCard;
