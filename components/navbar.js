const btnMobile = document.querySelector(".btn-mobile");
const menu = document.getElementById("menu");
const navbarEl = document.querySelector(".navbar-elements");
let menuMargin = false;
btnMobile.addEventListener("click", (e) => {
  if (!menuMargin) {
    menu.style = `margin-bottom:400px`;
    menuMargin = true;
    navbarEl.classList.add("navbar_mobile");
  } else {
    menu.style = `margin-bottom:0px`;
    menuMargin = false;
    navbarEl.classList.remove("navbar_mobile");
  }
});
