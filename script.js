const navButton = document.getElementsByClassName("nav__button")[0];
const navList = document.getElementsByClassName("nav__list")[0];

addEventListener("click", (event) => {
  if (!navList.contains(event.target) && !navButton.contains(event.target)) {
    navList.classList.remove("open");
  }
});

navButton.addEventListener("click", () => {
  navList.classList.toggle("open");
});
