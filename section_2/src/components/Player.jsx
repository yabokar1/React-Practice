import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = (
    <span className="inline-flex justify-center  text-center w-40 text-base border-none  text-[#e1dec7] uppercase m-0 p-2 rounded-md truncate">
      {playerName}
    </span>
  );

  if (isEditing) {
    editablePlayerName = (
      <input
        className=" font-inherit text-base w-40 border-none m-0 p-2 animate-pulse bg-[#46432f] text-center uppercase"
        type="text"
        required
        onChange={handleChange}
      />
    );
  }

  return (
    <li
      className={`flex items-center w-[50%] border-2 border-solid border-transparent active:border-[#f6e35a] active:animate-pulse ${
        isActive ? "active" : undefined
      }`}
    >
      <span className="border-2 border-transparent p-2 rounded-md font-bold">
        {editablePlayerName}
        <span className=" ml-4 text-base text-[#e1dec7] active:text-[#f6e35a]">
          {symbol}
        </span>
      </span>
      <button
        className="w-12 border-none bg-transparent text-[#c3ba78] text-sm cursor-pointer transition-colors duration-200 py-2 px-1 text-center hover:text-[#f8ca31]"
        onClick={handleEditClick}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
