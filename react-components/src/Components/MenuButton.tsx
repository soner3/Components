import { BsFilterLeft, BsList } from "react-icons/bs";

interface MenuButtonPropTypes {
  handleIsClicked: () => void;
  isClicked: boolean;
}

export default function MenuButton({
  handleIsClicked,
  isClicked,
}: MenuButtonPropTypes) {
  return (
    <button
      onClick={handleIsClicked}
      className={`transform transition-transform duration-500 ${
        isClicked ? "rotate-180" : "ease-linear"
      } rounded-full p-1 hover:bg-gray-200 focus:bg-gray-200 dark:hover:text-black dark:focus:text-black`}
    >
      {isClicked ? (
        <BsFilterLeft className="size-9 -rotate-180" />
      ) : (
        <BsList className="size-9" />
      )}
    </button>
  );
}
