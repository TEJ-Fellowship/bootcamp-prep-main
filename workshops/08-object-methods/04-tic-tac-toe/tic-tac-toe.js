// YOUR CODE BELOW

//defining an object ticTacToe
let ticTacToe = {
  //adding board key with array data type, as per spec.  with 3 rows, each row an array of 3 nulls
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  //move function takes a character, row, and col as parameter
  move: function (char, row, col) {
    //puts the value at 'char' in the 'row' and 'col'
    // of the 2 dimension array in the key 'board'
    // only if the existing value is null
    if (this.board[row][col] === null) this.board[row][col] = char;
    //then return the current state of board
    return this.board;
  },

  clear: function () {
    //clear function will assign the initial state value
    //to this.board
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    //then returns the current state of board
    return this.board;
  },
};
