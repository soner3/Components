import { useEffect, useState } from "react";
import { BsCircleHalf, BsMoonStarsFill, BsSun } from "react-icons/bs";

export default function Darkmode() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("theme");
    if (storedTheme === null) {
      setTheme("System");
    } else {
      setTheme(storedTheme);
    }
  }, []);

  function handleTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    if (selectedTheme === "Light") {
      setLightMode();
    } else if (selectedTheme === "Dark") {
      setDarkMode();
    } else if (selectedTheme === "System") {
      setSystemMode();
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="border h-full px-1 rounded-l-full flex justify-center items-center dark:border-black">
        {theme === "System" ? (
          <BsCircleHalf className="size-6 ml-1 m-1" />
        ) : theme === "Dark" ? (
          <BsMoonStarsFill className="size-6 ml-1 m-1" />
        ) : (
          <BsSun className="size-6 ml-1 m-1" />
        )}
      </div>
      <select
        name="theme"
        id="theme"
        className="rounded-r-full h-full px-1 dark:border-black dark:text-white outline-none bg-white border dark:bg-slate-900 font-medium hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-white dark:hover:text-black"
        value={theme}
        onChange={handleTheme}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="System">System</option>
      </select>
    </div>
  );
}

function setLightMode(): void {
  localStorage.theme = "Light";
  applyTheme();
}

function setDarkMode(): void {
  localStorage.theme = "Dark";
  applyTheme();
}

function setSystemMode(): void {
  localStorage.removeItem("theme");
  applyTheme();
}

function applyTheme(): void {
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
