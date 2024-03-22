export default function GameOver({ winner, onRestart }) {
  console.log(winner);
  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex flex-col 
    bg-[#282617] justify-center items-center bg-opacity-95 animate-pop-in"
    >
      <h2 className="font-caprasimo text-4xl text-center text-[#fcd256]">
        Game Over!
      </h2>
      {winner && (
        <p className="text-base text-center text-[#e1dec7]">{winner} won!</p>
      )}
      {!winner && (
        <p className="text-base text-center text-[#e1dec7]">
          It&apos;s a draw!
        </p>
      )}
      <p>
        <button
          onClick={onRestart}
          className="block mx-auto text-lg bg-transparent border-2 border-[#fcd256] text-[#fcd256] py-2 px-4 rounded-md cursor-pointer transition duration-200 shadow-md hover:bg-[#fcd256] hover:text-black focus:outline-none focus:border-transparent focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 
          hover:shadow-lg"
        >
          Rematch!
        </button>
      </p>
    </div>
  );
}
