// YOUR CODE BELOW
function veryOdd(arr) {
  //declare a new empty array to use for returning
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    //if current value is odd
    if (curr % 2 === 1) {
      //push the current value into result
      result.push(curr);
    }
  }
  return result;
}
