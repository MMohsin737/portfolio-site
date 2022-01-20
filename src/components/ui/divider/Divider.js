// Image
import divderImg from "../../../assets/images/divider-image.svg";

const Divider = ({ customStyle }) => {
  return (
    <div className={`${customStyle}`}>
      <img
        className={`w-full h-full object-contain`}
        src={divderImg}
        alt="divider"
      />
    </div>
  );
};

export default Divider;
