// Deafult
import { Fragment } from "react/cjs/react.production.min";

// Sections
import Hero from "./components/sections/hero/Hero";
import AboutMe from "./components/sections/aboutMe/AboutMe";
import Experince from "./components/sections/experince/Experince";
import ToolsTechnologies from "./components/sections/toolsTechnologies/ToolsTechnologies";
import Education from "./components/sections/education/Education";
import Portfolio from "./components/sections/portfolio/Portfolio";
import Testimonials from "./components/sections/testimonials/Testimonials";

// UI Widgets
import Nav from "./components/ui/nav/nav";
import SideNav from "./components/ui/side-nav/SideNav";

function App() {
  return (
    <Fragment>
      <SideNav />

      <Hero sectionID="hero">
        <Nav />
      </Hero>

      <AboutMe sectionID="aboutMe" />

      <Experince sectionID="experince" />

      <ToolsTechnologies sectionID="toolsTechnologies" />

      <Education sectionID="education" />

      <Portfolio sectionID="portfolio" />

      <Testimonials />
    </Fragment>
  );
}

export default App;
