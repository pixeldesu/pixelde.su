document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");

  if (document.querySelector(".js-nav-wrapper")) {
    import("./modules/navigation.js");
  }

  if (document.querySelector("[data-theme-toggle]")) {
    import("./modules/theme.js");
  }

  if (document.querySelector("[data-webring-container]")) {
    import("./modules/webring.js");
  }
});
