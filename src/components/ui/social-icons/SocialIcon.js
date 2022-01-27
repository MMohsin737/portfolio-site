// Styling
import classes from "./SocialIcon.module.css";

// Image
import linkedInIcon from "../../../assets/images/linkedIn-icon.svg";
import gitHubIcon from "../../../assets/images/github-icon.svg";
import behanceIcon from "../../../assets/images/behance-icon.svg";

const SocialIcon = ({ styleClasses, styleSpacing, type, linkToProfile }) => {
  const icon = {
    linkedin: linkedInIcon,
    github: gitHubIcon,
    behance: behanceIcon,
  };

  const btnBG = {
    linkedin: classes.linkedInCtnBG,
    github: classes.gitHubCtnBG,
    behance: classes.behanceCtnBG,
  };

  const btnHover = {
    linkedin: classes.linkedInBtnHover,
    github: classes.gitHubBtnHover,
    behance: classes.behanceBtnHover,
  };

  const iconBG = {
    linkedin: classes.linkedInIcoBG,
    github: classes.gitHubIcoBG,
    behance: classes.behanceIcoBG,
  };

  const btnType = type.toLowerCase();

  return (
    <a
      href={linkToProfile}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-row items-center relative ${classes.btn} ${btnHover[btnType]} ${btnBG[btnType]} ${classes.rightRound} ${styleSpacing}`}
    >
      <div className={`${styleClasses} p-1 mr-2 ${iconBG[btnType]} ${classes.leftRound}`}>
        <img className={`w-full h-full object-contain`} src={icon[btnType]} alt={btnType} />
      </div>
      <span className={`mr-2 font-medium text-sm uppercase mb-0 text-white ${classes.lineHzero}`}>{type}</span>
    </a>
  );
};

export default SocialIcon;
