document.addEventListener("DOMContentLoaded", function () {
  // Get the mobile-nav element
  const mobileNav = document.querySelector(".mobile-nav");

  // Get the mobile-menu button and cross-menu button
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const crossLogo = document.querySelector(".fa-xmark");

  function toggleMenu() {
    if (mobileNav.classList.contains("closed-menu")) {
      mobileNav.classList.remove("closed-menu");
      mobileNav.classList.add("open-menu");
    } else {
      mobileNav.classList.remove("open-menu");
      mobileNav.classList.add("closed-menu");
    }
  }

  // Add a click event listener to the mobile-menu button and cross-menu button
  mobileMenuButton.addEventListener("click", toggleMenu);
  crossLogo.addEventListener("click", toggleMenu);
});
