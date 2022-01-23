// Styling
import classes from "./CtaBtnV1.module.css";

const CtaBtnV1 = ({ customStyle, title, onPressed }) => {
  return (
    <button onClick={onPressed} className={`${classes.btnV1} ${customStyle}`}>
      {title}
    </button>
  );
};

export default CtaBtnV1;
