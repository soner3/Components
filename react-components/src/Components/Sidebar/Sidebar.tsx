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
    <aside
      className={`bg-gradient-to-b  ${
        isClicked
          ? "md:rounded-r-2xl p-2"
          : "-translate-x-full md:translate-x-0 md:w-[70px]"
      } duration-500 flex flex-col text-white from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 left-0 fixed h-full md:rounded-none md: rounded-r-2xl w-[280px] z-20 shadow-2xl`}
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
    </aside>
  );
}
