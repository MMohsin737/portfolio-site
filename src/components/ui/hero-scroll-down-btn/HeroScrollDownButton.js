// Styling
import classes from "./HeroScrollDownButton.module.css";

// Image
import downArrow from "../../../assets/images/down-arrow.svg";

const HeroScrollDownButton = ({ sectionID, children }) => {
  return (
    <div className={`w-10`}>
      <button className={`p-0`}>
        <img
          className={`w-full h-full object-contain opacity-40 hover:opacity-100 ${classes.pulse}`}
          src={downArrow}
          alt=""
        />
        <div className={`${classes.sides}`}></div>
      </button>
    </div>
  );
};

export default HeroScrollDownButton;
