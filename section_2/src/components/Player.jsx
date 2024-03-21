import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span>
        {playerName}
        <span className="">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
