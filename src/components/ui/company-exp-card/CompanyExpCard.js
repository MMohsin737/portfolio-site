// Styling
import classes from "./CompanyExpCard.module.css";

const CompanyExpCard = ({ imgSrc, jobTitle, companyTitle, location, dateJoiningEnding, backgroundColor }) => {
  const icoBG = backgroundColor.toLowerCase() === "red" ? classes.redIconBG : classes.whiteIconBG;
  const cardBG = backgroundColor.toLowerCase() === "red" ? classes.redBodyBG : classes.whiteBodyBG;

  return <div>
    <div className={`w-52 p-16 ${icoBG}`}>
      <img className={`w-full h-full object-contain`} src={imgSrc} alt={companyTitle} />
    </div>
  </div>;
};

export default CompanyExpCard;
