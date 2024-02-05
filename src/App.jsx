import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

import handleGameBoard from "./util/handleGameBoard.js";
import checkActivePlayer from "./util/checkActivePlayer.js";
import checkWinner from "./util/checkWinner.js";

import { INITIAL_GAME_BOARD } from "./data/initial-game-board.js";
import { WINNING_COMBINATIONS } from "./data/winning-combinations.js";

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNameX, setPlayerNameX] = useState("Player 1");
  const [playerNameO, setPlayerNameO] = useState("Player 2");

  const activePlayer = checkActivePlayer(gameTurns);

  let gameBoard = INITIAL_GAME_BOARD;
  gameBoard = handleGameBoard(gameBoard, gameTurns);

  let winner = checkWinner(WINNING_COMBINATIONS, gameBoard);

  const handleSelectCell = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = checkActivePlayer(prevTurns);

      const updatedTurns = [
        {
          cell: { row: rowIndex, col: colIndex },
          player: {
            name: currentPlayer === "X" ? playerNameX : playerNameO,
            symbol: currentPlayer,
          },
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handlePlayerNameChangeX = (name) => {
    setPlayerNameX(name);
  };

  const handlePlayerNameChangeO = (name) => {
    setPlayerNameO(name);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            playerNameChange={handlePlayerNameChangeX}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            playerNameChange={handlePlayerNameChangeO}
          />
        </ol>

        {winner && (
          <p>{winner === "X" ? playerNameX : playerNameO} is the winner!</p>
        )}
        <GameBoard onSelectCell={handleSelectCell} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}
