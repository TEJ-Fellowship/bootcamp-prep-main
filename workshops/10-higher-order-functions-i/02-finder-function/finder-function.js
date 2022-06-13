// YOUR CODE BELOW
function finderFunction(array, func) {
  //declare variable to return, initialize it with the fail value
  let result = -1;

  //loop through array
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    //pass the current value into func
    let ret = func(currVal);
    //if func returns true, then return the current index
    if (ret) return i;
  }

  //if func doesnt return true for any values in array, then return -1
  return result;
}
