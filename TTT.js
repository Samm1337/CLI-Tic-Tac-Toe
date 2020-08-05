const prompt = require('prompt');

let board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

let moveCount = 0;

let winCons = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let xMoves = [];
let oMoves = [];
//true = X, false = 0
let currentPlayer = true;

const showBoard = function() {
  console.log(
  ` ${board[1]} | ${board[2]} | ${board[3]} \n` +
  ` ${board[4]} | ${board[5]} | ${board[6]} \n` +
  ` ${board[7]} | ${board[8]} | ${board[9]} \n`);
};

const boardInit = function() {
  console.log( 'Game Started: \n' +
    ` 1 | 2 | 3 \n` +
    ` 4 | 5 | 6 \n` +
    ` 7 | 8 | 9 \n`);
};

const playTurn = function() {
  prompt.start();
  prompt.get(['position'] (err, result) => {
    if (board[result.position] !== ' ') {
      console.log('Place taken. Please select a new position')
      playTurn();
    }
    board[result.position] = currentPlayer ? 'X' : 'O';
    moveCount++;
    currentPlayer ? xMoves.push(result.position) : yMoves.push(result.position)
    currentPlayer = !currentPlayer;
    showBoard();

  })
}