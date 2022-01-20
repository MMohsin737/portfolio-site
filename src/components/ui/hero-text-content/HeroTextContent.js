// Styling
import classes from "./HeroTextContent.module.css";

const HeroTextConent = () => {
  return (
    <div>
      <h1
        className={`2xl:text-7xl xl:text-5xl lg:text-4xl md:text-4xl text-5xl text-white font-light
                      2xl:text-left xl:text-left lg:text-left md:text-left text-center`}
      >
        Hey, I'm <span className={`font-bold ${classes["text-Primary-Color"]}`}>Mohsin</span>
      </h1>
      <h3
        className={`2xl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl mr-5 mt-2 leading-tight 
                      2xl:text-left xl:text-left lg:text-left md:text-left text-center text-white font-light`}
      >
        a <span className={`font-bold ${classes["text-Primary-Color"]}`}>self-taught</span> UI designer & front-end
        developer.
      </h3>
    </div>
  );
};

export default HeroTextConent;
