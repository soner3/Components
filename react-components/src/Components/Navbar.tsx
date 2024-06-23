import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { setDarkMode, setLightMode, setSystemMode } from "./DarkMode";
import { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function Navbar() {
  const [theme, setTheme] = useState<string>("");
  const [search, setSearch] = useState<string>("");

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

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearch("");
  }

  return (
    <nav className="flex justify-between p-2 fixed top-0 w-screen dark:border-black border bg-transparent bg-white text-black dark:text-white dark:bg-slate-900">
      <div className="flex justify-center items-center">
        <button className="rounded-full p-1 hover:bg-gray-200 focus:bg-gray-200 dark:hover:text-black dark:focus:text-black">
          <BsList className="size-9 " />
        </button>
        <a href="#">
          <h1 className="text-3xl font-bold ml-4">Logo</h1>
        </a>
      </div>

      <form
        method="get"
        onSubmit={handleSubmit}
        className="border dark:border-black rounded-full md:flex justify-center hidden"
      >
        <button
          type="submit"
          className="px-3 flex justify-center items-center bg-slate-100 dark:bg-slate-900 rounded-l-full hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black"
        >
          <BsSearch className="size-5" />
        </button>
        <input
          type="search"
          name="search"
          id="searchId"
          value={search}
          placeholder="Search"
          onChange={handleSearchChange}
          className="border-l rounded-r-full p-2 focus:ring-2 duration-500 outline-none w-64 xl:w-96 dark:text-black"
        />
      </form>
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
    </nav>
  );
}
