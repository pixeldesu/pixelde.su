import "../vendor/leaflet.js";

const getCurrentTheme = () => {
  if (("theme" in localStorage)) {
    return localStorage.getItem("theme");
  }

  return (globalThis.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
};

const lightLayer = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  },
);

const darkLayer = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  },
);

const setTileLayer = () => {
  if (getCurrentTheme() === "light") {
    map.removeLayer(darkLayer);
    map.addLayer(lightLayer);
  }

  if (getCurrentTheme() === "dark") {
    map.removeLayer(lightLayer);
    map.addLayer(darkLayer);
  }
};

const mapElement = document.getElementById("map");

const lang = mapElement.closest("[lang]")?.lang || navigator.language || "en";
const dateTimeFormatter = new Intl.DateTimeFormat(lang, {
  dateStyle: "medium",
});

L.Icon.Default.prototype.options.imagePath = "/assets/img/vendor/leaflet/";

const mapData = JSON.parse(decodeURI(mapElement.dataset.events));

const markerBounds = mapData.map((
  event,
) => [event.location.lat, event.location.lng]);

const mapBounds = new L.LatLngBounds(markerBounds);

const map = L.map("map").fitBounds(mapBounds);

setTileLayer();

for (const event of mapData) {
  const marker = L.marker([event.location.lat, event.location.lng]).addTo(map);

  const startDate = dateTimeFormatter.format(new Date(event.date.start));
  const endDate = dateTimeFormatter.format(new Date(event.date.end));

  marker.bindPopup(`
    <b>${event.name}</b><br>
    <i>${startDate} - ${endDate}</i><br>
    <a href="${event.url}" target="_blank">${event.url}</a>
    `);
}

document.body.addEventListener("theme-toggle", () => {
  console.log("h");
  setTileLayer();
});
