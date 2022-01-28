// Styling
import classes from "./SideNav.module.css";

const SideNav = ({ onPressed, closeSidebar }) => {
  const scrollTOSection = (id) => {
    closeSidebar();
    onPressed(id);
  };

  const underLine = (
    <div className={`w-full flex flex-row justify-center items-center`}>
      <div className={`${classes.underline}`}></div>
      <div className={`${classes.underline}`}></div>
    </div>
  );

  return (
    <div id="mySidenav" className={`${classes.sidenav}`}>
      <button className={`${classes.closebtn}`} onClick={closeSidebar}>
        &times;
      </button>
      <button className={`${classes.menuButton}`} onClick={() => scrollTOSection("aboutMe")}>
        About Me
        {underLine}
      </button>
      <button className={`${classes.menuButton}`} onClick={() => scrollTOSection("experince")}>
        Experince
        {underLine}
      </button>
      <button className={`${classes.menuButton}`} onClick={() => scrollTOSection("toolsTechnologies")}>
        Technologies
        {underLine}
      </button>
      <button className={`${classes.menuButton}`} onClick={() => scrollTOSection("education")}>
        Education
        {underLine}
      </button>
      <button className={`${classes.menuButton}`} onClick={() => scrollTOSection("portfolio")}>
        Portfolio
        {underLine}
      </button>
      <button className={`${classes.menuButton}`} onClick={() => scrollTOSection("letsTalk")}>
        Let's Talk
        {underLine}
      </button>
    </div>
  );
};

export default SideNav;
