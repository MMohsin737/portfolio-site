// Image
import Logo from "../../../assets/images/logo.svg";

// UI Widgets
import NavButton from "../nav-button/NavButton";

const Nav = ({ onMenuPressed }) => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  return (
    <div className={`flex justify-between`}>
      <img src={Logo} alt="" />
      <NavButton onPressed={openNav} />
    </div>
  );
};

export default Nav;
