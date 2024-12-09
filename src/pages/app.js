// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("nav-links");
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("hidden");
// });

document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("hidden");
});
