// Deafult
import { Fragment } from "react/cjs/react.production.min";

// Sections
import Hero from "./components/sections/hero/Hero";

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
    </Fragment>
  );
}

export default App;
