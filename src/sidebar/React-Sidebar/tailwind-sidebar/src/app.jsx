import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-blue-500 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } w-72 relative duration-300`}
      >
        <BsArrowLeft
          onClick={() => {
            setOpen(!open);
          }}
          className="text-white bg-black text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer p-1"
        />
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-bold">Home Page</h1>
      </div>
    </div>
  );
}
