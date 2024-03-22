export default function GameBoard({ onSelectSquare, board }) {
  console.log("Entered GameBoard");
  console.log(board);
  return (
    <ol className="flex flex-wrap justify-center gap-8 my-12 mx-0 p-0 flex-col">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex flex-wrap justify-center gap-8 m-0  p-0">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="w-32 h-32 border-none bg-[#aca788] text-[#3f3b00] text-5xl cursor-pointer font-caprasimo p-4"
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
