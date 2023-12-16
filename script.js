const navBarDropList = document.querySelector(".show-dropdown");
const menuButton = document.querySelector(".menu-icon");

menuButton.addEventListener("click", showNavMenu);

function showNavMenu() {
  if (navBarDropList.style.display === "none") {
    navBarDropList.style.display = "block";
  } else {
    navBarDropList.style.display = "none";
  }
}
