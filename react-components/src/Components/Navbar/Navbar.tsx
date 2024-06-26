import Darkmode from "./Darkmode";
import Search from "./Search";
import Logo from "./Logo";
import MenuButton from "../MenuButton";

interface NavbarPropTypes {
  handleIsClicked: () => void;
  isClicked: boolean;
}

export default function Navbar({
  handleIsClicked,
  isClicked,
}: NavbarPropTypes) {
  return (
    <header className="flex justify-between z-20 p-2 top-0 w-full dark:border-black border bg-transparent bg-white text-black dark:text-white dark:bg-slate-900 shadow-xl">
      <div className="flex justify-center items-center gap-3">
        <MenuButton handleIsClicked={handleIsClicked} isClicked={isClicked} />
        <a href="#">
          <Logo>Logo</Logo>
        </a>
      </div>

      <Search />
      <Darkmode />
    </header>
  );
}
