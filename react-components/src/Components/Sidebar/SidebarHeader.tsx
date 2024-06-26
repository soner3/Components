import { BsArrowLeftCircleFill } from "react-icons/bs";
import Logo from "../Navbar/Logo";
import { ReactNode } from "react";

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
