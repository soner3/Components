export function applyTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function setLightMode() {
  localStorage.theme = "light";
  applyTheme();
}

export function setDarkMode() {
  localStorage.theme = "dark";
  applyTheme();
}

export function setSystemMode() {
  localStorage.removeItem("theme");
  applyTheme();
}
