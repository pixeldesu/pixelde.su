const getCurrentTheme = () => {
  if (("theme" in localStorage)) {
    return localStorage.getItem("theme");
  }

  return (globalThis.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
};

const themeToggle = document.querySelector("[data-theme-toggle]");
themeToggle.addEventListener("click", () => {
  if (!("theme" in localStorage)) {
    localStorage.setItem("theme", getCurrentTheme());
  }

  if (getCurrentTheme() === "light") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
