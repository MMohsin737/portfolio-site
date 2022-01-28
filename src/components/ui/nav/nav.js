// Image
import Logo from "../../../assets/images/logo.svg";

// UI Widgets
import NavButton from "../nav-button/NavButton";

// Styling
import classes from "./nav.module.css";

const Nav = ({ onMenuPressed }) => {
  return (
    <div className={`flex justify-between`}>
      <img className={`${classes.ico}`} src={Logo} alt="" />
      <NavButton onPressed={onMenuPressed} />
    </div>
  );
};

export default Nav;
