import { WINNING_COMBINATIONS } from "../data/winning-combinations";

export default function checkWinner(gameBoard, players) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstCellSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondCellSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdCellSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstCellSymbol &&
      firstCellSymbol === secondCellSymbol &&
      firstCellSymbol === thirdCellSymbol
    ) {
      return players[firstCellSymbol];
    }
  }
}
