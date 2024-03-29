export const enableNAV = () => {
  const html = document.getElementsByTagName("HTML")[0];
  html.classList.remove("disableScroll");
};

export const diableNAV = () => {
  const html = document.getElementsByTagName("HTML")[0];
  html.classList.add("disableScroll");
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
  document.querySelector("#" + sectionID).scrollIntoView({ behavior: "smooth" });
};

export const removeLoadingScreen = () => {
  window.onload = () => {
    document
      .getElementById("initialLoadingScreen")
      .animate({ opacity: 0 }, { duration: 500, iterations: 1, easing: "ease-out" }).onfinish = () => {
      enableNAV();
      document
        .querySelector("#initialLoadingScreen")
        .parentNode.removeChild(document.getElementById("initialLoadingScreen"));
    };
  };
};
