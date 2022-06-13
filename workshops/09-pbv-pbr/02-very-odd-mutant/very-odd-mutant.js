// YOUR CODE BELOW
function veryOddMutant(arr) {
  //because we need to return a number
  //we are declaring result as a zero
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    //if the current value is odd number
    if (cur % 2 === 0) {
      //first replace this element in array with 'normie'
      arr[i] = "normie";
      //then increase the count we are keeping by one
      result++;
    }
  }

  return result;
}
