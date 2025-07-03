export const calculateWinner = (
  squares: Array<string | null>,
): string | null => {
  const winningState: Array<Array<number>> = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let x = winningState.length - 1;
  while (--x) {
    if (!squares.length) {
      return null;
    }

    const [a, b, c] = winningState[x];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return "winner: " + squares[a];
    }
  }

  return null;
};
