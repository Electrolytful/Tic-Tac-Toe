export default function handleGameBoard(gameBoard, gameTurns) {
  let board = gameBoard;

  for (const turn of gameTurns) {
    const { cell, player } = turn;
    const { row, col } = cell;

    board[row][col] = player.symbol;
  }

  return board;
}
