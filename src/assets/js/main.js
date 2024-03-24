const navigationToggle = document.querySelector(".js-nav-toggle");

if (navigationToggle) {
  navigationToggle.addEventListener("click", () => {
    const navigationWrapper = document.querySelector(".js-nav-wrapper");
    navigationWrapper.classList.toggle("h-fit");
  });
}
