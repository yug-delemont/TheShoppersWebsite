// Navbar Toggle
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector("html").classList.toggle("show-menu");
  });

// Add class in Mega Menu
document.querySelector("#mega-menu-btn").addEventListener("click", function () {
  document.querySelector(".mega-menu-li").classList.toggle("show-mega-menu");
});
