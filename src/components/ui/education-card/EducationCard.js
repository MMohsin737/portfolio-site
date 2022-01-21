// Styling
import classes from "./EducationCard.module.css";

const EducationCard = ({
  cardType,
  icon,
  title,
  instituteName,
  joiningPassing,
  credentialID,
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
    <div className={`flex flex-col w-full items-center mr-3 justify-center `}>
      {/* Title */}
      <h2 className={`text-lg w-full text-left`}>{title}</h2>

      {/* Divider */}
      <div className={`${classes.cardDividerVertical}`}></div>

      {/* Other Info */}
      <div className={`w-full text-left flex flex-col justify-center items-start`}>
        <span className={`block text-sm`}>{instituteName}</span>
        <span className={`block text-sm`}>{joiningPassing}</span>
      </div>
    </div>
  );

  // const instituteCardBodyBack = (
  //   <div className={`${classes["flip-card-back"]}`}>
  //     <div className={`flex flex-row w-full items-center pr-3  ${bodybg}`}>
  //       <h1 className="text-center text-white">Hello</h1>
  //     </div>
  //   </div>
  // );

  const certificateCardBodyFront = (
    <div className={`flex flex-row w-full items-center pr-3`}>
      {/* Title */}
      <h2 className={`flex-grow text-base w-3/4 text-left`}>{title}</h2>

      <div className={`flex flex-row`}>
        {/* Divider */}
        <div className={`${classes.cardDividerHorizontal}`}></div>

        {/* Other Info */}
        <div className={`w-full text-right ml-auto flex flex-col justify-center items-start`}>
          <span className={`block w-full text-xs text-right`}>{instituteName}</span>
          <span className={`block w-full text-xs text-right`}>{joiningPassing}</span>
        </div>
      </div>
    </div>
  );

  // const certificateCardBodyBack = (
  //   <div className={`${classes["flip-card-back"]} ${bodybg}`}>
  //     <div className={`flex flex-row w-full items-center pr-3`}>
  //       <h1 className="text-center text-white">Hello</h1>
  //     </div>
  //   </div>
  // );

  const cardBodyFront = cardType.toLowerCase() === "academic" ? instituteCardBodyFront : certificateCardBodyFront;
  // const cardBodyBack = cardType.toLowerCase() === "academic" ? instituteCardBodyBack : certificateCardBodyBack;

  return (
    // <div className={``}>
    //   <div className={`${classes["flip-card"]}`}>
    //     <div className={`${classes["flip-card-inner"]}`}>
    //       <div className={`${classes["flip-card-front"]}`}>
    //         <div
    //           className={`mx-auto flex flex-row w-5/6 text-white
    //               ${classes["flip-card-inner"]} ${customSpacing} ${bodybg[mapKey]}`}
    //         >
    //           <div className={`mr-3 w-28 h-20 p-2 flex justify-center items-center ${iconbg[mapKey]}`}>
    //             <img className={`h-14 w-16 object-contain`} src={icon} alt={instituteName} />
    //           </div>
    //           {cardBodyFront}
    //         </div>
    //       </div>
    //       {cardBodyBack}
    //     </div>
    //   </div>
    // </div>
    <div
      className={`mx-auto flex flex-row w-5/6 text-white 
                  ${classes["flip-card-inner"]} ${customSpacing} ${bodybg[mapKey]}`}
    >
      <div className={`mr-3 w-28 h-20 p-2 flex justify-center items-center ${iconbg[mapKey]}`}>
        <img className={`h-14 w-16 object-contain`} src={icon} alt={instituteName} />
      </div>
      {cardBodyFront}
    </div>
  );
};

export default EducationCard;
