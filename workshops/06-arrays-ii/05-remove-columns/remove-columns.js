// YOUR CODE BELOW
function removeColumns(arr, col) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    let curRow = arr[i];
    let newRow = [];
    for (j = 0; j < curRow.length - col; j++) {
      newRow.push(curRow[j]);
    }
    ret.push(newRow);
  }

  return ret;
}
