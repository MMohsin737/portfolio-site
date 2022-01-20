const SectionDivider = ({ dividerHeight, customStyle }) => {
  return (
    <div
      className={`w-1 ${dividerHeight} ${customStyle} rounded-full bg-white opacity-20`}
    ></div>
  );
};

export default SectionDivider;
