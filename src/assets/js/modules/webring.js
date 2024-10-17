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
    const onionringData = globalThis[onionringNamespace];

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