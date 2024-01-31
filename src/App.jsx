import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectCell = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { cell: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard
          onSelectCell={handleSelectCell}
          turns={gameTurns}
        />
        <Log />
      </div>
    </main>
  );
}
