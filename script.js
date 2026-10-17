const menuButton = document.querySelector(".menu-button");
const menuSection = document.querySelector("#menu");

if (menuButton && menuSection) {
  menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", "#menu");
  });
}
