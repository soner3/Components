import {
  BsFillCalendar2DateFill,
  BsFolderFill,
  BsHouseDoorFill,
  BsMicrosoftTeams,
  BsSpeedometer,
} from "react-icons/bs";
import SidebarBodyItem from "./SidebarBodyItem";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";

export default function SidebarBody({ isClicked = false }) {
  return (
    <div className="flex flex-col h-full">
      <ul className="flex-grow">
        {isClicked ? (
          <>
            <SidebarBodyItem
              href={"#"}
              icon={<BsHouseDoorFill className="size-5" />}
              isClicked={isClicked}
            >
              Dashboard
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsMicrosoftTeams className="size-5" />}
              isClicked={isClicked}
            >
              Team
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsFolderFill className="size-5" />}
              isClicked={isClicked}
            >
              Projects
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsFillCalendar2DateFill className="size-5" />}
              isClicked={isClicked}
            >
              Calender
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<HiMiniDocumentDuplicate className="size-5" />}
              isClicked={isClicked}
            >
              Documents
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsSpeedometer className="size-5" />}
              isClicked={isClicked}
            >
              Report
            </SidebarBodyItem>
          </>
        ) : (
          <>
            <SidebarBodyItem
              href={"#"}
              icon={<BsHouseDoorFill className="size-7" />}
              isClicked={isClicked}
            >
              Dashboard
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsMicrosoftTeams className="size-7" />}
              isClicked={isClicked}
            >
              Team
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsFolderFill className="size-7" />}
              isClicked={isClicked}
            >
              Projects
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsFillCalendar2DateFill className="size-7" />}
              isClicked={isClicked}
            >
              Calender
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<HiMiniDocumentDuplicate className="size-7" />}
              isClicked={isClicked}
            >
              Documents
            </SidebarBodyItem>
            <SidebarBodyItem
              href={"#"}
              icon={<BsSpeedometer className="size-7" />}
              isClicked={isClicked}
            >
              Report
            </SidebarBodyItem>
          </>
        )}
      </ul>
    </div>
  );
}
