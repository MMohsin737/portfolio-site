// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";

const Portfolio = ({ sectionID }) => {
  const behanceProjects = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1d713d130524295.6182155b6fcc5.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7654f997051517.5ebc366a7af14.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3d208796994401.5ebb01972aab1.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/effca596175207.5ea871aeb504c.png",
  ];

  return (
    <div
      id={sectionID}
      className={`mt-14 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="My" subtitle="Portfolio" />

      <div className={`w-full flex`}>
        {behanceProjects.map((item, index) => (
          <div className="w-80 h-80 mx-5 overflow-hidden flex-wrap justify-between">
            <img className="w-full h-auto object-cover" src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
