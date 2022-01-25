// Styling
import classes from "./SectionHeading.module.css";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <h2
      className={`lg:text-5xl text-4xl md:text-left uppercase text-center text-white font-normal opacity-60 mb-9 ${classes.letterSpacing10}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
