export const enableNAV = () => {
  const body = document.getElementsByTagName("BODY")[0];
  body.classList.remove("disableScroll");
};

export const diableNAV = () => {
  const body = document.getElementsByTagName("BODY")[0];
  body.classList.add("disableScroll");
};

export const openNav = () => {
  diableNAV();
  document.getElementById("mySidenav").style.width = "100%";
};

export const closeNav = () => {
  enableNAV();
  document.getElementById("mySidenav").style.width = "0%";
};

export const scrollTo = (sectionID) => {
  document
    .querySelector("#" + sectionID)
    .scrollIntoView({ behavior: "smooth" });
};

export const removeLoadingScreen = () => {
  window.onload = () => {
    document
      .getElementById("initialLoadingScreen")
      .animate(
        { opacity: 0 },
        { duration: 300, iterations: 1, easing: "ease-out" }
      ).onfinish = () => {
      enableNAV();
      document.getElementById("initialLoadingScreen").style.opacity = 0;
      // document
      //   .querySelector("#initialLoadingScreen")
      //   .parentNode.removeChild(document.getElementById("initialLoadingScreen"));
    };
  };
};
