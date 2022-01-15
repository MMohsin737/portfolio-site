// Styling
import classes from "./HeroTextContent.module.css";

const HeroTextConent = () => {
  return (
    <div>
      <h1 className={`xl:text-7xl lg:text-5xl md:text-5xl text-2xl text-white font-light`}>
        Hey, I'm{" "}
        <span className={`font-bold ${classes["text-Primary-Color"]}`}>
          Mohsin
        </span>
      </h1>
      <h3 className={`xl:text-5xl lg:text-3xl md:text-5xl text-base mr-5 mt-2 leading-tight text-white font-light`}>
        a{" "}
        <span className={`font-bold ${classes["text-Primary-Color"]}`}>
          self-taught
        </span>{" "}
        UI designer & front-end developer.
      </h3>
    </div>
  );
};

export default HeroTextConent;
