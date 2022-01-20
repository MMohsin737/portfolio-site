// Styling
import classes from "./SectionHeading.module.css";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <h2 className={`text-7xl xl:text-left lg:text-left md:text-left text-center text-white font-light mb-9`}>
      {title}
      <span className={`${classes.textPrimaryColor} font-semibold ml-3`}>
        {subtitle}
      </span>
    </h2>
  );
};

export default SectionHeading;
