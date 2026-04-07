let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let combo of wins) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  return board.every(cell => cell !== "");
}

function handleClick(index) {
  if (board[index] !== "" || !gameActive) return;
  board[index] = currentPlayer;
  document.getElementById(index).textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById("status").textContent = "Player " + currentPlayer + " wins! 🎉";
    gameActive = false;
    return;
  }

  if (checkTie()) {
    document.getElementById("status").textContent = "It's a tie!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").textContent = "Player " + currentPlayer + "'s turn";
}

document.querySelectorAll(".cell").forEach((cell, index) => {
  cell.addEventListener("click", () => han