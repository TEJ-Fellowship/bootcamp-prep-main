// YOUR CODE BELOW
function rotateArray(arr, num = 0) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    ret.push(arr[(i + arr.length - num) % arr.length]);
  }

  return ret;
}
