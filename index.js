document.addEventListener("DOMContentLoaded", function () {
  // Get the mobile-nav element
  const mobileNav = document.querySelector(".mobile-nav");

  // Get the mobile-menu button, cross-menu button and mobile-nav links
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const crossLogo = document.querySelector(".fa-xmark");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

  function toggleMenu() {
    if (mobileNav.classList.contains("closed-menu")) {
      mobileNav.classList.remove("closed-menu");
      mobileNav.classList.add("open-menu");
    } else {
      mobileNav.classList.remove("open-menu");
      mobileNav.classList.add("closed-menu");
    }
  }

  // Add a click event listener to the mobile-menu button, cross-menu button and each link in mobile-nav
  mobileMenuButton.addEventListener("click", toggleMenu);
  crossLogo.addEventListener("click", toggleMenu);
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
