import { BsBootstrapFill, BsFillGearFill } from "react-icons/bs";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

interface SidebarPropTypes {
  isClicked: boolean;
  handleIsClicked: () => void;
}

export default function Sidebar({
  isClicked,
  handleIsClicked,
}: SidebarPropTypes) {
  return (
    <nav
      className={`${
        isClicked
          ? "md:rounded-r-2xl p-2 z-20"
          : "-translate-x-full md:translate-x-0 md:w-[70px]"
      } fixed z-0 md:z-20 h-full bg-gradient-to-b duration-500 flex flex-col text-white from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 left-0 md:rounded-none   rounded-r-2xl w-[280px]  shadow-2xl`}
    >
      <SidebarHeader
        icon={
          <BsBootstrapFill className={`size-7 ${isClicked ? "mr-2" : ""}`} />
        }
        handleIsClicked={handleIsClicked}
        isClicked={isClicked}
      />
      <SidebarBody isClicked={isClicked} />
      {isClicked ? (
        <SidebarFooter
          isClicked={isClicked}
          href={"#"}
          icon={<BsFillGearFill className="size-5" />}
        >
          Settings
        </SidebarFooter>
      ) : (
        <SidebarFooter
          isClicked={isClicked}
          href={"#"}
          icon={<BsFillGearFill className="size-7" />}
        >
          Settings
        </SidebarFooter>
      )}
    </nav>
  );
}
