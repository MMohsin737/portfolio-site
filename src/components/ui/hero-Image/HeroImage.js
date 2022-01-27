// Styling
import classes from "./HeroImage.module.css";

// Image
// import HeroImage from "../../../assets/images/hero-image.png";

const Hero = ({ imageSrc }) => {
  return (
    <div className={`relative`}>
      <div className={`${classes.boxTop}`}></div>
      <div className={`${classes.outlineBoxTop}`}></div>
      <div className={`w-11/12 mx-auto`}>
        <img className={`h-full w-full object-contain`} src={imageSrc} alt="" />
      </div>
      <div className={`${classes.outlineBoxBottom}`}></div>
      <div className={`${classes.boxBottom}`}></div>
    </div>
  );
};

export default Hero;
