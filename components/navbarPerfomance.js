const btnMobile = document.querySelector(".btn-mobile");
const menu = document.getElementById("menu");
const navbarEl = document.querySelector(".navbar-elements");
const bgImage = document.querySelector(".bg_img");
const bgDivImage = document.querySelector(".img_header");

let menuMargin = false;
btnMobile.addEventListener("click", (e) => {
  if (!menuMargin) {
    menu.style = `margin-bottom:400px`;
    menuMargin = true;
    navbarEl.classList.add("navbar_mobile");
    bgDivImage.classList.add("bgTopMargin");
  } else {
    menu.style = `margin-bottom:0px`;
    menuMargin = false;
    navbarEl.classList.remove("navbar_mobile");
    bgDivImage.classList.remove("bgTopMargin");
  }
});
