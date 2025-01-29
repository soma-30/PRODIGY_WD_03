const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X'; // X starts first
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Empty board

// Event listener for each cell click
cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

// Handle click on a cell
function handleClick(event) {
  const cellIndex = event.target.getAttribute('data-cell');
  if (gameBoard[cellIndex] !== '') return; // If the cell is already filled, do nothing

  gameBoard[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWinner()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns
}

// Check for a winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

// Reset the game
document.getElementById('reset').addEventListener('click', resetGame);

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X'; // X starts again
}
