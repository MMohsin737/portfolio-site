// Deafult
import { Fragment, useEffect } from 'react/cjs/react.production.min';
import ReactPixel from 'react-facebook-pixel';

// Sections
import Hero from './components/sections/hero/Hero';
import AboutMe from './components/sections/aboutMe/AboutMe';
import Experince from './components/sections/experince/Experince';
import ToolsTechnologies from './components/sections/toolsTechnologies/ToolsTechnologies';
import Education from './components/sections/education/Education';
import Portfolio from './components/sections/portfolio/Portfolio';
import LetsTalk from './components/sections/letsTalk/LetsTalk';

// UI Widgets
import LoadingScreen from './components/ui/loading-screen/LoadingScreen';
import Nav from './components/ui/nav/nav';
import SideNav from './components/ui/side-nav/SideNav';

// Utils
import {
  openNav,
  closeNav,
  scrollTo,
  removeLoadingScreen,
} from './utils/utils';

// Styling
import './theme/utilities.css';

function App() {
  removeLoadingScreen();

  const advancedMatching = { em: 'mmohsin737@live.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };

  useEffect(() => {
    ReactPixel.init('708494253797147', advancedMatching, options);
  });

  ReactPixel.pageView(); // For tracking page view

  return (
    <Fragment>
      <LoadingScreen />

      <SideNav onPressed={scrollTo} closeSidebar={closeNav} />

      <Hero sectionID='hero'>
        <Nav onMenuPressed={openNav} />
      </Hero>

      <AboutMe sectionID='aboutMe' />

      <Experince sectionID='experince' />

      <ToolsTechnologies sectionID='toolsTechnologies' />

      <Education sectionID='education' />

      <Portfolio sectionID='portfolio' />

      <LetsTalk sectionID='letsTalk' />
    </Fragment>
  );
}

export default App;
