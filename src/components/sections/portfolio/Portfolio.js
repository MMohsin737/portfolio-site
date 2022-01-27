// UI Widgets
import SectionHeading from "../../ui/section-heading/SectionHeading";
import CtaBtnV1 from "../../ui/cta-btn-v1/CtaBtnV1";

// Styling
import classes from "./Portfolio.module.css";

const Portfolio = ({ sectionID }) => {
  const myProjets = [
    {
      name: "Elysium Sols",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1d713d130524295.6182155b6fcc5.png",
      liveLink: "https://elysiumsols.com/",
      designLink: "https://www.behance.net/gallery/130524295/Tech-Company-Landing-Page",
    },
    {
      name: "Exhange Rate App",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/790204105463953.5f79fa2d86990.png",
      liveLink: "",
      designLink: "https://www.behance.net/gallery/105463953/Exchange-Rate-Mobile-Application",
    },
    {
      name: "Swift Traning",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7654f997051517.5ebc366a7af14.png",
      liveLink: "",
      designLink: "https://www.behance.net/gallery/97051517/Professional-Training-Providing-Firm-Landing-Page",
    },
    {
      name: "E-Book Guard",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3d208796994401.5ebb01972aab1.png",
      liveLink: "",
      designLink: "https://www.behance.net/gallery/96994401/Landing-Page-%28eBookGuard%29",
    },
    {
      name: "Critic",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/effca596175207.5ea871aeb504c.png",
      liveLink: "",
      designLink: "https://www.behance.net/gallery/96175207/Crtic-%28Design-Work-Review-Site%29",
    },
  ];

  const scaleImg = "scale-125";

  return (
    // <div id={sectionID} className={`mt-28 mx-auto xl:w-3/4 lg:w-11/12 md:w-11/12 w-full px-5`}>
    <div id={sectionID} className={`mt-28 mx-auto md:container container 2xl:px-36 lg:px-32 px-5`}>
      <SectionHeading title="Portfolio" />

      <div className={`w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5`}>
        {myProjets.map((item, index) => (
          <div key={index} className={`w-full overflow-hidden relative ${classes.roundBorder} ${classes.parentHover}`}>
            <img className={`w-full h-auto object-fill ${index === 1 && scaleImg}`} src={item.thumbnail} alt="" />
            <div className={`${classes.mainContentDiv}`}>
              <div className={`${classes.hoverDiv}`}>
                <h4 className={`${classes.hoverDivTitle}`}>{item.name}</h4>
                <div className={`${classes.hoverDivBtns}`}>
                  <a
                    target="_blank"
                    className={`bg-transparent text-white text-sm mt-1`}
                    href={item.designLink}
                    rel="noreferrer"
                  >
                    View Design
                  </a>

                  {item.liveLink !== "" && <div className={`${classes.lineDivider}`}></div>}

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
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row items-center justify-center mt-8">
        <CtaBtnV1 title="More Designs" customStyle={`mr-9`} onPressed={() => {}} />
        <CtaBtnV1 title="More Live Projets" customStyle={``} onPressed={() => {}} />
      </div>
    </div>
  );
};

export default Portfolio;
