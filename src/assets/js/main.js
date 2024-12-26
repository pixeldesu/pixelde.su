document.addEventListener("DOMContentLoaded", async () => {
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

  if (document.querySelector(".lightbox")) {
    const Parvus = (await import("./vendor/parvus.js")).default;

    new Parvus({
      captionsSelector: "[data-caption]",
    });
  }
});
