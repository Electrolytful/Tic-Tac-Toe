export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ cell, player }, index) => {
        const log = `${player.name} selected cell ${cell.row},${cell.col}`;

        return index == 0 ? (
          <li key={`${cell.row}${cell.col}`} className="highlighted">
            {log}
          </li>
        ) : (
          <li key={`${cell.row}${cell.col}`}>{log}</li>
        );
      })}
    </ol>
  );
}
