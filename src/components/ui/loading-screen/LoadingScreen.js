// Styling
import classes from "./LoadingScreen.module.css";
import "../../../theme/utilities.css";

// Utils
import { diableNAV } from "../../../utils/utils";

const LoadingScreen = () => {
  diableNAV();

  return (
    <div id="initialLoadingScreen" className={`${classes.backDropScreen}`}>
      <span className={`${classes.loader}`}></span>
      <h5 className={`${classes.loadingText}`}>Loading</h5>
    </div>
  );
};

export default LoadingScreen;
