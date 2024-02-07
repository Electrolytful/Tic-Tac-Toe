import { useState } from "react";
import { Player, Log, GameBoard, GameOver } from "./components/index.jsx";
import {
  checkActivePlayer,
  checkWinner,
  handleGameBoard,
} from "./util/index.jsx";

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
          isActive={activePlayer === "O"}free
          onChangeName={handlePlayerNameChange}
        />
      </ol>
      <div id="game-container">
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
