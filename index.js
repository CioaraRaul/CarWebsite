// Selecting elements
const navBarHeader = document.querySelector(".navbar");
const button = document.querySelector(".btn-mobile");
const headerElement = document.querySelector(".header");

// Toggle function
const toggleMobileMenu = function () {
  navBarHeader.classList.toggle("show-menu");

  if (navBarHeader.classList.contains("show-menu")) {
    // If the menu is open, move down the elements
    headerElement.style.marginBottom = "30rem";
  } else {
    // If the menu is closed, reset the margin
    headerElement.style.marginBottom = 0;
  }
};

// Event listeners
button.addEventListener("click", toggleMobileMenu);

// Window resize event listener to close the menu on larger screens
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navBarHeader.classList.remove("show-menu");
    headerElement.style.marginBottom = 0;
  }
});
