// Styling
import classes from "./SocialIcon.module.css";

// Image
import linkedInIcon from "../../../assets/images/linkedIn-icon.svg";

const SocialIcon = ({ styleClasses }) => {
  return (
    <button
      className={`flex flex-row items-center relative ${classes.linkedInbtnHover} ${classes.linkedInCtnBG} ${classes.rightRound}`}
    >
      <div
        className={`${styleClasses} p-2 mr-2 ${classes.linkedInIcoBG} ${classes.leftRound}`}
      >
        <img
          className={`w-full h-full object-contain`}
          src={linkedInIcon}
          alt=""
        />
      </div>
      <span
        className={`mr-2 font-medium text-sm uppercase mb-0 text-white ${classes.lineHzero}`}
      >
        LinkedIn
      </span>
    </button>
  );
};

export default SocialIcon;
