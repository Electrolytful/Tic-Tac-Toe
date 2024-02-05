export default function checkWinner(win_combinations, gameBoard) {
  for (const combination of win_combinations) {
    const firstCellSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondCellSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdCellSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstCellSymbol &&
      firstCellSymbol === secondCellSymbol &&
      firstCellSymbol === thirdCellSymbol
    ) {
      return firstCellSymbol;
    } else {
      return undefined;
    }
  }
}
