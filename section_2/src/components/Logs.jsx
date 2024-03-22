export default function Logs({ turns }) {
  return (
    <ol id="max-w-20rem text-[#3f3b00] list-none mx-auto p-0 text-center">
      {turns.map((turn) => (
        <li
          className="rounded-md animate-slide-in-from-left duration-1000 mx-3 my-2 bg-brown-800 text-white"
          key={`${turn.square.row}${turn.square.col}`}
        >
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
