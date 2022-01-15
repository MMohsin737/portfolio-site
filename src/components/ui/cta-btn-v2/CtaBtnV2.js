// Styling
import classes from "./CtaBtnV2.module.css";

const CtaBtnV2 = ({ customStyle, title, onPressed }) => {
  return (
    <button
      onClick={onPressed}
      className={`${classes.btnV2} ${customStyle} px-4 py-2 text-xl font-normal`}
    >
      {title}
      <span></span>
    </button>
  );
};

export default CtaBtnV2;
