// YOUR CODE BELOW
function makeGrid(col, row) {
  let ret = [];
  for (let i = 0; i < row; i++) {
    let oneRow = [];
    for (let j = 0; j < col; j++) {
      oneRow.push(j + 1);
    }
    ret.push(oneRow);
  }
  return ret;
}
