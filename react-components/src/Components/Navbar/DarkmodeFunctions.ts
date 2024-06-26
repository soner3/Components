export function applyTheme(): void {
  if (
    localStorage.theme === "Dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function setLightMode(): void {
  localStorage.theme = "Light";
  applyTheme();
}

export function setDarkMode(): void {
  localStorage.theme = "Dark";
  applyTheme();
}

export function setSystemMode(): void {
  localStorage.removeItem("theme");
  applyTheme();
}
