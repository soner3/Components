import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { setDarkMode, setLightMode, setSystemMode } from "./DarkMode";

export default function Navbar() {
  function handleTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedTheme = event.target.value;
    if (selectedTheme === "Light") {
      setLightMode();
    } else if (selectedTheme === "Dark") {
      setDarkMode();
    } else if (selectedTheme === "System") {
      setSystemMode();
    }
  }

  return (
    <nav className="flex justify-between p-2 fixed top-0 w-screen border bg-transparent bg-white text-black dark:text-white dark:bg-slate-900">
      <div className="flex justify-center items-center">
        <button className="rounded-full p-1 hover:bg-slate-200 focus:bg-slate-200">
          <BsList className="size-8" />
        </button>
        <a href="#">
          <h1 className="text-3xl font-bold ml-2">Logo</h1>
        </a>
      </div>

      <form
        method="post"
        className="border rounded-full md:flex  justify-center hidden"
      >
        <button
          type="submit"
          className="p-2 flex justify-center items-center bg-slate-100 dark:bg-slate-900 rounded-l-full"
        >
          <BsSearch className="size-4 dark:text-white" />
        </button>
        <input
          type="search"
          name="searchInput"
          id="searchId"
          placeholder="Search"
          className="border-l rounded-r-full p-2 focus:ring-2 duration-500 outline-none w-96 xl:w-[700px]"
        />
      </form>
      <div className="flex justify-center items-center ">
        <select
          name="theme"
          id="theme"
          className="rounded m-2 p-2 h-full dark:text-black"
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
