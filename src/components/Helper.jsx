export const checkWinner = (state, currentMove, currentPlayer) => {
  let currentGame = [...state];
  currentGame[currentMove] = currentPlayer;

  const winnerPossibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let poss of winnerPossibility) {
    const [a, b, c] = poss;
    if (
      currentGame[a] !== null &&
      currentGame[a] === currentGame[b] &&
      currentGame[b] === currentGame[c]
    ) {
      return true;
    }
  }

  return false;
};

export const isDraw = (gameBoard, currentMove, currentPlayer) => {
  let board = [...gameBoard];
  board[currentMove] = currentPlayer;
  let count = board.reduce((n, x) => n + (x === null), 0);

  return count === 0;
};
