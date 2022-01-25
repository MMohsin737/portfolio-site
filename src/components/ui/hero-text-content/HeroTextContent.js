// Styling
import classes from "./HeroTextContent.module.css";

const HeroTextConent = () => {
  return (
    <div className="w-full mb-8">
      <h1
        className={`${classes.mainTitle} text-white font-light md:text-left text-center`}
      >
        Hey, I'm <span className={`font-bold ${classes["text-Primary-Color"]}`}>Mohsin</span>
      </h1>
      <h3 className={`${classes.subTitle} leading-tight md:text-left text-center text-white font-light`}>
        a <span className={`font-bold ${classes["text-Primary-Color"]}`}>self-taught</span> UI designer & <br /> front-end
        developer.
      </h3>
    </div>
  );
};

export default HeroTextConent;
