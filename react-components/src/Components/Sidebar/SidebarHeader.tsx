import { BsArrowLeftCircleFill, BsSearch } from "react-icons/bs";
import Logo from "../Navbar/Logo";
import { ReactNode, useState } from "react";

interface SidebarPropTypes {
  icon: ReactNode;
  handleIsClicked: () => void;
  isClicked: boolean;
}

export default function SidebarHeader({
  icon,
  handleIsClicked,
  isClicked,
}: SidebarPropTypes) {
  const [search, setSearch] = useState<string>("");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearch("");
  }

  return (
    <>
      {isClicked ? (
        <>
          <div className="flex items-center justify-between p-1 mb-2">
            <a href="#" className="flex justify-center items-center">
              <span>{icon}</span>
              <Logo>Logo</Logo>
            </a>
            <button onClick={handleIsClicked}>
              <BsArrowLeftCircleFill className="size-7" />
            </button>
          </div>
          <hr className="mb-2" />

          <form
            method="get"
            onSubmit={handleSubmit}
            className="rounded-full md:hidden justify-center flex my-2"
          >
            <button
              type="submit"
              className="border hover:bg-slate-200 hover:bg-opacity-40 px-3 flex justify-center items-center rounded-l-full"
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
              className="rounded-r-full p-2 focus:ring-2 duration-500 outline-none w-64 xl:w-96 text-black"
            />
          </form>
        </>
      ) : (
        <>
          <div className="p-5 border-b hover:bg-slate-200 hover:bg-opacity-40 hover:cursor-pointer">
            <a href="#">{icon}</a>
          </div>
        </>
      )}
    </>
  );
}
