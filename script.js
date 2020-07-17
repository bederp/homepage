const name = "Paweł";
const age = 32;
console.log("Logged dupa");

const hamburger = document.querySelector(".hamburger--js");
console.log(hamburger);

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation__open");
});
