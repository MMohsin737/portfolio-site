// Styling
import classes from "./TimelineDivider.module.css";

// Image
import divderImg from "../../../assets/images/divider-image.svg";

const TimelineDivider = ({ barHeight }) => {
    const barHG = barHeight.toLowerCase() === "large" ? classes.lHG : classes.sHG;
  return (
    <div className={`${barHG} mx-3 ${classes.centerCard}`}>
      <img
        className={`w-full h-full object-contain`}
        src={divderImg}
        alt="divider"
      />
    </div>
  );
};

export default TimelineDivider;
