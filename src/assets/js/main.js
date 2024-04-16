const navigationToggle = document.querySelector(".js-nav-toggle");

if (navigationToggle) {
  navigationToggle.addEventListener("click", () => {
    const navigationWrapper = document.querySelector(".js-nav-wrapper");
    navigationWrapper.classList.toggle("h-fit");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");

  if (document.querySelector("[data-webring-container]")) {
    const webrings = Array.from(document.querySelectorAll("[data-webring]"));
    const randomWebringIndex = Math.floor(Math.random() * webrings.length);

    const randomWebring = webrings[randomWebringIndex].cloneNode(true);
    randomWebring.classList.remove("bg-slate-100");

    const webringPlaceholder = document.querySelector("[data-webring-placeholder]");
    webringPlaceholder.replaceWith(randomWebring);
  }
});