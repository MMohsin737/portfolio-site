// Styling
// import classes from "./HeroImage.module.css";

// Image
// import HeroImage from "../../../assets/images/hero-image.png";

const Hero = ({ imageSrc }) => {
  return (
    <div className={`w-2/5`}>
      <img className={`h-full w-full object-contain`} src={imageSrc} alt="" />
      {/* <div className={`${classes.pulse}`}></div> */}
    </div>
  );
};

export default Hero;
