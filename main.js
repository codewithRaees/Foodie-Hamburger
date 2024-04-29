// const showMenu = document.querySelector(".hamburger-menu");
// var navBar = document.querySelector("nav");
// var closeicon = document.querySelector(".close-icon");
// const hamburgerMenu = document.querySelector(".hamburger-menu-container");
// console.log(hamburgerMenu);
// // console.log(navBar);
// const menu = false;
// navBar.style.display = "none";

// showMenu.addEventListener("click", () => {
//   if (!menu) {
//     navBar.style.display = "flex";
//     hamburgerMenu.style.display = "none";
//   } else {
//     showMenu.style.display = "flex";
//     hamburgerMenu.style.display = "block";
//   }
// });
// closeicon.addEventListener("click", () => {
//   navBar.style.display = "none";
//   hamburgerMenu.style.display = "block";
// });
const showmenu = document.querySelector(".menu-main-container");
const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const mainwrapper = document.querySelector(".main-wrapper");
var navBar = document.querySelector("nav");

var closeicon = document.querySelector(".close-icon");
var go = document.querySelector("h3");

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();

  showmenu.classList.add("open-menu");
});

closeicon.addEventListener("click", (e) => {
  showmenu.classList.remove("open-menu");
});

//Go to Top click Listner
go.addEventListener("click", () => {
  mainwrapper.scrollTo(0, 0);
});
window.addEventListener("click", () => {
  showmenu.classList.remove("open-menu");
});

// To apply stoppropagation on nav bar

navBar.addEventListener("click", (e) => {
  e.stopPropagation();
});
