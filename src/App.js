// Deafult
import { Fragment } from "react/cjs/react.production.min";

// Sections
import Hero from "./components/sections/hero/Hero";
import AboutMe from "./components/sections/aboutMe/AboutMe";
import Experince from "./components/sections/experince/Experince";
import ToolsTechnologies from "./components/sections/toolsTechnologies/ToolsTechnologies";
import Education from "./components/sections/education/Education";
import Portfolio from "./components/sections/portfolio/Portfolio";
import LetsTalk from "./components/sections/letsTalk/LetsTalk";

// UI Widgets
import LoadingScreen from "./components/ui/loading-screen/LoadingScreen";
import Nav from "./components/ui/nav/nav";
import SideNav from "./components/ui/side-nav/SideNav";

// Utils
import { openNav, closeNav, scrollTo, removeLoadingScreen } from "./utils/utils";

// Styling
import "./theme/utilities.css";

function App() {
  removeLoadingScreen();

  return (
    <Fragment>
      <LoadingScreen />

      <SideNav onPressed={scrollTo} closeSidebar={closeNav} />

      <Hero sectionID="hero">
        <Nav onMenuPressed={openNav} />
      </Hero>

      <AboutMe sectionID="aboutMe" />

      <Experince sectionID="experince" />

      <ToolsTechnologies sectionID="toolsTechnologies" />

      <Education sectionID="education" />

      <Portfolio sectionID="portfolio" />

      <LetsTalk sectionID="letsTalk" />
    </Fragment>
  );
}

export default App;
