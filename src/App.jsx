import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import handleGameBoard from "./util/handleGameBoard.js";
import checkActivePlayer from "./util/checkActivePlayer.js";
import checkWinner from "./util/checkWinner.js";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

export default function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = checkActivePlayer(gameTurns);
  const gameBoard = handleGameBoard(gameTurns);
  const winner = checkWinner(gameBoard, players);
  const draw = gameTurns.length == 9 && !winner;

  const handleSelectCell = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = checkActivePlayer(prevTurns);

      const updatedTurns = [
        {
          cell: { row: rowIndex, col: colIndex },
          player: {
            name: currentPlayer === "X" ? players.X : players.O,
            symbol: currentPlayer,
          },
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, name) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || draw) && (
          <GameOver
            winner={draw ? undefined : winner}
            onRematch={handleRematch}
          />
        )}
        <GameBoard onSelectCell={handleSelectCell} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}
