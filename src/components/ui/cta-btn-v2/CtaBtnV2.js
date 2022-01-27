// Styling
import classes from "./CtaBtnV2.module.css";

const CtaBtnV2 = ({ customStyle, title, onPressed }) => {
  return (
    // <button
    //   onClick={onPressed}
    //   className={`${classes.btnV2} ${customStyle} px-2 py-1 text-lg font-normal`}
    // >

    //   <span></span>
    // </button>
    <button className={`${classes.btnV2} ${customStyle}`} onClick={onPressed}>
      <span className={`${classes.text}`}>Donwload Resume</span>
      <span className={`${classes.icon}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.978 29.978">
          <path d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012   v-8.861H25.462z" />
          <path d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723   c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742   c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193   C15.092,18.979,14.62,18.426,14.62,18.426z" />
        </svg>
      </span>
    </button>
  );
};

export default CtaBtnV2;
