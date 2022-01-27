// Styling
import classes from "./CtaBtnV1.module.css";

const CtaBtnV1 = ({ customStyle, title, onPressed }) => {
  return (
    <div className={`${classes.mainBtnDiv} ${customStyle}`}>
      <button onClick={onPressed} className={`${classes.btnV1}`}>
        {title}
      </button>
    </div>
  );
};

export default CtaBtnV1;
