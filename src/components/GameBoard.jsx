const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectCell, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { cell, player } = turn;
    const { row, col } = cell;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => onSelectCell(rowIndex, colIndex)}>
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
