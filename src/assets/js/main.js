const navigationToggle = document.querySelector(".js-nav-toggle");

if (navigationToggle) {
  navigationToggle.addEventListener("click", () => {
    const navigationWrapper = document.querySelector(".js-nav-wrapper");
    navigationWrapper.classList.toggle("h-fit");
  });
}

const getCurrentTheme = () => {
  if (("theme" in localStorage)) {
    return localStorage.getItem("theme");
  }

  return (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");

  const themeToggle = document.querySelector("[data-theme-toggle]");
  themeToggle.addEventListener("click", () => {
    if (!("theme" in localStorage)) {
      localStorage.setItem("theme", getCurrentTheme());
    }

    if (getCurrentTheme() === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  });

  if (document.querySelector("[data-webring-container]")) {
    const webrings = Array.from(document.querySelectorAll("[data-webring]"));
    const randomWebringIndex = Math.floor(Math.random() * webrings.length);

    const randomWebring = webrings[randomWebringIndex].cloneNode(true);
    randomWebring.classList.remove("webring--highlighted");

    const webringPlaceholder = document.querySelector("[data-webring-placeholder]");
    webringPlaceholder.replaceWith(randomWebring);

    const onionrings = document.querySelectorAll("[data-onionring]");
    if (onionrings.length > 0) {
      onionrings.forEach(onionringElement => {
        const onionringNamespace = onionringElement.dataset.onionring;
        const onionringData = window[onionringNamespace];

        const prevLink = onionringElement.querySelector("[data-webring-link-prev]");
        const nextLink = onionringElement.querySelector("[data-webring-link-next]");
        const randomLink = onionringElement.querySelector("[data-webring-link-random]");

        const siteIndex = onionringData.sites.indexOf("https://pixelde.su");
        const prevSite = onionringData.sites[siteIndex - 1];
        const nextSite = (siteIndex + 1) === onionringData.sites.length ? onionringData.sites[0] : onionringData.sites[siteIndex + 1];

        const randomSite = () => {
          const otherSites = onionringData.sites.slice();
          otherSites.splice(siteIndex, 1);
          const randomIndex = Math.floor(Math.random() * otherSites.length);
          return otherSites[randomIndex];
        }

        if (prevLink) {
          prevLink.href = prevSite;
        }

        if (nextLink) {
          nextLink.href = nextSite;
        }

        if (randomLink) {
          randomLink.href = randomSite();
        }
      });
    }
  }
});