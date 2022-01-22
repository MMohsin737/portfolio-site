// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Styling
import classes from "./Portfolio.module.css";

const Portfolio = ({ sectionID }) => {
  const behanceProjects = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1d713d130524295.6182155b6fcc5.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/790204105463953.5f79fa2d86990.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7654f997051517.5ebc366a7af14.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3d208796994401.5ebb01972aab1.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/effca596175207.5ea871aeb504c.png",
  ];

  const myProjets = [
    {
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1d713d130524295.6182155b6fcc5.png",
      liveLink: "https://elysiumsols.com/",
      designLink:
        "https://www.behance.net/gallery/130524295/Tech-Company-Landing-Page",
    },
    {
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/790204105463953.5f79fa2d86990.png",
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/105463953/Exchange-Rate-Mobile-Application",
    },
    {
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7654f997051517.5ebc366a7af14.png",
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/97051517/Professional-Training-Providing-Firm-Landing-Page",
    },
    {
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3d208796994401.5ebb01972aab1.png",
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/96994401/Landing-Page-%28eBookGuard%29",
    },
    {
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/effca596175207.5ea871aeb504c.png",
      liveLink: "",
      designLink:
        "https://www.behance.net/gallery/96175207/Crtic-%28Design-Work-Review-Site%29",
    },
  ];

  const scaleImg = "scale-125";

  return (
    <div
      id={sectionID}
      className={`mt-14 mx-auto xl:w-7/12 lg:w-4/5 md:w-11/12 w-full px-5`}
    >
      <SectionHeading title="My" subtitle="Portfolio" />

      <div className={`w-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5`}>
        {myProjets.map((item, index) => (
          <div
            className={`overflow-hidden relative ${classes.roundBorder} ${classes.parentHover}`}
          >
            <img
              className={`w-full h-auto object-cover ${
                index === 1 && scaleImg
              }`}
              src={item.thumbnail}
              alt=""
            />
            <div className={`${classes.hoverBackdrop}`}>
              <div className={`${classes.hoverDiv}`}>
                <a
                  target="_blank"
                  className={`bg-transparent text-white text-sm mt-1`}
                  href={item.designLink}
                  rel="noreferrer"
                >
                  View Design
                </a>

                {item.liveLink !== "" && (
                  <div className={`${classes.lineDivider}`}></div>
                )}

                {item.liveLink !== "" && (
                  <a
                    target="_blank"
                    className={`bg-transparent text-white text-sm mt-1`}
                    href={item.liveLink}
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row items-center justify-center mt-8">
        <CtaBtnV1
          title="See More Designs"
          customStyle={`mr-5 2xl:text-xl xl:text-xl lg:text-xl text-sm`}
          onPressed={() => {}}
        />
        <CtaBtnV1
          title="See Developed Projets"
          customStyle={`2xl:text-xl xl:text-xl lg:text-xl text-sm`}
          onPressed={() => {}}
        />
      </div>
    </div>
  );
};

export default Portfolio;
