interface SidebarFooterPropTypes {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  isClicked: boolean;
}

export default function SidebarFooter({
  href = "#",
  children,
  icon,
  isClicked,
}: SidebarFooterPropTypes) {
  return (
    <>
      {isClicked ? (
        <div className="w-full mb-16">
          <a href={href} className="">
            <li className="p-2 font-medium hover:bg-slate-200 hover:bg-opacity-40 hover:cursor-pointer rounded-md flex items-center gap-3">
              <div>{icon}</div>
              <p>{children}</p>
            </li>
          </a>
        </div>
      ) : (
        <div className="w-full mb-14">
          <a href={href} className="">
            <li className="p-5 border-t border-b font-medium hover:bg-slate-200 hover:bg-opacity-40 hover:cursor-pointer flex">
              <div>{icon}</div>
            </li>
          </a>
        </div>
      )}
    </>
  );
}
