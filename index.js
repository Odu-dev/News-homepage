const showNav = document.querySelector(".show_nav");
const hideNav = document.querySelector(".hide_nav");
const navItem = document.querySelector(".nav_item");

showNav.addEventListener(
  "click",
  (showNavItem = () => {
    navItem.style.display = "flex";
    showNav.style.display = "none";
    hideNav.style.display = "block";
  })
);

hideNav.addEventListener(
  "click",
  (showNavItem = () => {
    navItem.style.display = "none";
    showNav.style.display = "block";
    hideNav.style.display = "none";
  })
);
