import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <Navbar handleIsClicked={handleIsClicked} isClicked={isClicked} />
      <Sidebar isClicked={isClicked} handleIsClicked={handleIsClicked} />

      <main className="pt-2 px-2 md:ml-[70px] dark:text-white overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        saepe ea ratione alias in molestias. Excepturi laborum sed quo delectus,
        beatae dolores officiis maiores minus exercitationem labore quas ducimus
        consequatur.
      </main>
    </>
  );
}

export default App;
