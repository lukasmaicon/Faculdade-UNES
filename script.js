const isDarkMode = localStorage.getItem("dark") === "true";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
btn.classList.toggle("active", isDarkMode);
container.classList.toggle("active", isDarkMode);

btn.onclick = function () {
  this.classList.toggle("active");
  container.classList.toggle("active");

  const elements = document.getElementsByClassName("index");
  for (const element of elements) {
    element.classList.toggle("mystyle");
  }

  localStorage.setItem("dark", this.classList.contains("active"));
};

window.addEventListener("load", () => {
  if (isDarkMode) {
    btn.classList.add("active");
    container.classList.add("active");

    const elements = document.getElementsByClassName("index");
    for (const element of elements) {
      element.classList.add("mystyle");
    }
  }
});

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "./img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./img/close_white_36dp.svg";
  }
}
