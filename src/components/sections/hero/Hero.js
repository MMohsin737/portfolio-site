const Hero = ({ sectionID, children }) => {
  return (
    <div id={sectionID} className={`mt-10 mx-auto xl:w-4/5 lg:w-4/5 md:w-11/12 w-full`}>
      {children}
      
    </div>
  );
};

export default Hero;
