export default function checkActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player.symbol === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}
