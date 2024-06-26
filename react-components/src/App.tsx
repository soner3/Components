import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <Navbar handleIsClicked={handleIsClicked} isClicked={isClicked} />
      <Sidebar isClicked={isClicked} handleIsClicked={handleIsClicked} />
    </div>
  );
}

export default App;
