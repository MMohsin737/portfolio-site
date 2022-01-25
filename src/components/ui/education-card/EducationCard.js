// Styling
import classes from "./EducationCard.module.css";
import "../../../theme/utilities.css";

const EducationCard = ({
  cardType,
  icon,
  title,
  instituteName,
  joiningPassing,
  info,
  certificateURL,
  customSpacing,
}) => {
  const mapKey = instituteName.replace(/ /g, "").toLowerCase();

  const iconbg = {
    szabist: classes.blue_1_IconBG,
    iqrauniversity: classes.whiteIconBG,
    udemy: classes.whiteIconBG,
    coursera: classes.blue_2_IconBG,
  };

  const bodybg = {
    szabist: classes.blue_1_BodyBG,
    iqrauniversity: classes.whiteBodyBG,
    udemy: classes.whiteBodyBG,
    coursera: classes.blue_2_BodyBG,
  };

  const instituteCardBodyFront = (
    <div className={`${classes["flip-card-front"]}`}>
      <div className={`${classes["flip-card-inner"]}`}>
        <div className={`mx-auto flex flex-row text-white ${bodybg[mapKey]}`}>
          <div
            className={`mr-3 w-28 h-20 p-2 flex justify-center items-center ${iconbg[mapKey]}`}
          >
            <img
              className={`h-14 w-16 object-contain`}
              src={icon}
              alt={instituteName}
            />
          </div>
          <div
            className={`flex flex-col w-full items-center mr-3 justify-center `}
          >
            {/* Title */}
            <h2 className={`text-lg w-full text-left`}>{title}</h2>

            {/* Divider */}
            <div className={`${classes.cardDividerVertical}`}></div>

            {/* Other Info */}
            <div
              className={`w-full text-left flex flex-col justify-center items-start`}
            >
              <span className={`block text-sm`}>{instituteName}</span>
              <span className={`block text-sm`}>{joiningPassing}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const instituteCardBodyBack = (
    <div className={`${classes["flip-card-back"]}`}>
      <div className={`${classes["flip-card-inner"]}`}>
        <div
          className={`flex flex-col justify-center items-center p-2 h-20 ${bodybg[mapKey]}`}
        >
          <h4 className={`text-white text-base font-semibold uppercase`}>
            Specialization
          </h4>
          <h4 className={`text-white text-base`}>{info}</h4>
        </div>
      </div>
    </div>
  );

  const certificateCardBodyFront = (
    <div className={`${classes["flip-card-front"]}`}>
      <div className={`${classes["flip-card-inner"]}`}>
        <div className={`mx-auto flex flex-row text-white ${bodybg[mapKey]}`}>
          <div
            className={`mr-3 w-28 h-20 p-2 flex justify-center items-center ${iconbg[mapKey]}`}
          >
            <img
              className={`h-14 w-16 object-contain`}
              src={icon}
              alt={instituteName}
            />
          </div>
          <div className={`flex flex-row w-full items-center pr-3`}>
            {/* Title */}
            <h2 className={`flex-grow text-base w-3/4 text-left`}>{title}</h2>

            <div className={`flex flex-row`}>
              {/* Divider */}
              <div className={`${classes.cardDividerHorizontal}`}></div>

              {/* Other Info */}
              <div
                className={`w-full text-right ml-auto flex flex-col justify-center items-start`}
              >
                <span className={`block w-full text-xs text-right`}>
                  {instituteName}
                </span>
                <span className={`block w-full text-xs text-right`}>
                  {joiningPassing}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const certificateCardBodyBack = (
    <div className={`${classes["flip-card-back"]}`}>
      <div className={`${classes["flip-card-inner"]}`}>
        <div
          className={`flex flex-col justify-center items-center p-2 h-20 ${bodybg[mapKey]}`}
        >
          <h4 className={`text-white text-base`}>{info}</h4>
          <a
            target="_blank"
            className={`bg-transparent text-white text-sm mt-1`}
            href={certificateURL}
            rel="noreferrer"
          >
            See Credentials
          </a>
        </div>
      </div>
    </div>
  );

  const cardFront =
    cardType.toLowerCase() === "academic"
      ? instituteCardBodyFront
      : certificateCardBodyFront;

  const cardBack =
    cardType.toLowerCase() === "academic"
      ? instituteCardBodyBack
      : certificateCardBodyBack;

  return (
    <div
      className={`md:w-5/6 w-full ${classes["flip-card"]} ${customSpacing} notSelectable`}
    >
      {cardFront}
      {cardBack}
    </div>
  );
};

export default EducationCard;
