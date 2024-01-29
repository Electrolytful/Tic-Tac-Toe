import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>

        <GameBoard />
      </div>
    </main>
  );
}
