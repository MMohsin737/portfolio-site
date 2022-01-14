// Styling
import classes from "./SideNav.module.css";

const SideNav = ({ onPressed }) => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div id="mySidenav" className={`${classes.sidenav}`}>
      <button className={`${classes.closebtn}`} onClick={closeNav}>
        &times;
      </button>
      <button className={`${classes.menuButton}`}>About Me</button>
      <button className={`${classes.menuButton}`}>Professional Experince</button>
      <button className={`${classes.menuButton}`}>My Expertise</button>
      <button className={`${classes.menuButton}`}>My Education</button>
    </div>
  );
};

export default SideNav;
