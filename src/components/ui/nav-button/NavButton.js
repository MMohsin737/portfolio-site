// Styling
import classes from "./NavButton.module.css";

const NavButton = ({ onPressed }) => {
  return (
    <button onClick={onPressed} className={`${classes.iconBtn}`}>
      <div className={`${classes.btnIcon}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
};

export default NavButton;
