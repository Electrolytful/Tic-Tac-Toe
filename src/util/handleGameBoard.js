import { INITIAL_GAME_BOARD } from "../data/initial-game-board";

export default function handleGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { cell, player } = turn;
    const { row, col } = cell;

    gameBoard[row][col] = player.symbol;
  }

  return gameBoard;
}
