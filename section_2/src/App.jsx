import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div className="max-w-3xl my-12 mx-auto p-8 rounded-md bg-gradient-to-r from-[#383624] to-[#282617] shadow-lg relative">
        <ol className=" flex justify-center items-center gap-8 list-none p-0 my-4 mx-0">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
