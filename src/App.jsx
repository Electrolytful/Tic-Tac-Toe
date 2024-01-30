import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectCell = () => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}
