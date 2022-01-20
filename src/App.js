// Deafult
import { Fragment } from "react/cjs/react.production.min";

// Sections
import Hero from "./components/sections/hero/Hero";
import AboutMe from "./components/sections/about-me/AboutMe";
import ProfessionalExperince from "./components/sections/professional-experince/ProfessionalExperince";
import MyExpertise from "./components/sections/my-expertise/MyExpertise";

// UI Widgets
import Nav from "./components/ui/nav/nav";
import SideNav from "./components/ui/side-nav/SideNav";

function App() {
  return (
    <Fragment>
      <SideNav />

      <Hero sectionID="home">
        <Nav />
      </Hero>

      <AboutMe sectionID="about-me" />

      <ProfessionalExperince sectionID="professional-experince" />

      <MyExpertise sectionID="my-expertise" />
    </Fragment>
  );
}

export default App;
