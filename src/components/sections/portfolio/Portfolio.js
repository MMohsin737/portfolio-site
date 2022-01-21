// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";

const Portfolio = ({ sectionID }) => {
  return (
    <div id={sectionID} className={`mt-14 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}>
      <SectionHeading title="My" subtitle="Portfolio" />
    </div>
  );
};

export default Portfolio;
