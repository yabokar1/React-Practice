import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = (
    <span className="inline-flex w-40 text-base text-[#e1dec7] uppercase m-0 p-2 rounded-md truncate text-center">
      {name}
    </span>
  );

  if (isEditing) {
    playerName = (
      <input
        className="font-inherit text-base w-40 border-none py-2 px-2 animate-pulse bg-[#46432f] text-center uppercase"
        type="text"
        required
      />
    );
  }

  return (
    <li className=" flex items-center w-[50%] border-2 border-solid border-transparent active:border-[#f6e35a] active:animate-pulse">
      <span className="border-2 border-transparent p-2 rounded-md font-bold">
        {playerName}
        <span className=" ml-4 text-base text-[#e1dec7] active:text-[#f6e35a]">
          {symbol}
        </span>
      </span>
      <button
        className="w-12 border-none bg-transparent text-[#c3ba78] text-sm cursor-pointer transition-colors duration-200 py-2 px-1 text-center hover:text-[#f8ca31]"
        onClick={handleEditClick}
      >
        Edit
      </button>
    </li>
  );
}
