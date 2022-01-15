// Styling
import classes from "./SocialIcon.module.css";

// Image
import linkedInIcon from "../../../assets/images/linkedIn-icon.svg";
import gitHubIcon from "../../../assets/images/github-icon.svg";
import behanceIcon from "../../../assets/images/behance-icon.svg";

const SocialIcon = ({ styleClasses, styleSpacing, type, onPressed }) => {
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

  return (
    <button
      onClick={onPressed}
      className={`flex flex-row items-center relative ${
        btnHover[type.toLowerCase()]
      } ${btnBG[type.toLowerCase()]} ${classes.rightRound} ${styleSpacing}`}
    >
      <div
        className={`${styleClasses} p-2 mr-2 ${iconBG[type.toLowerCase()]} ${
          classes.leftRound
        }`}
      >
        <img
          className={`w-full h-full object-contain`}
          src={icon[type.toLowerCase()]}
          alt={type.toLowerCase()}
        />
      </div>
      <span
        className={`mr-2 font-medium text-sm uppercase mb-0 text-white ${classes.lineHzero}`}
      >
        {type}
      </span>
    </button>
  );
};

export default SocialIcon;
