// Image
import Logo from "../../../assets/images/logo.svg";

// UI Widgets
import NavButton from "../nav-button/NavButton";

// Styling
import classes from "./nav.module.css";

const Nav = ({ onMenuPressed }) => {
  const openNav = () => {
    const body = document.getElementsByTagName("BODY")[0];
    body.style.overflowY = "hidden";
    document.getElementById("mySidenav").style.width = "100%";
  };

  return (
    <div className={`flex justify-between`}>
      <img className={`${classes.ico}`} src={Logo} alt="" />
      <NavButton onPressed={openNav} />
    </div>
  );
};

export default Nav;
