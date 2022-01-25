// Styling
import classes from "./TimelineDivider.module.css";

// Image
import divderImg from "../../../assets/images/divider-image.svg";

const TimelineDivider = () => {
  return (
    <div className={`${classes.lHG} mx-3 ${classes.centerCard}`}>
      <img className={`w-full h-full object-contain`} src={divderImg} alt="divider" />
    </div>
  );
};

export default TimelineDivider;
