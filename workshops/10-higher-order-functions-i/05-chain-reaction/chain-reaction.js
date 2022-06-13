// YOUR CODE BELOW
function chainReaction(val, arrayOfFunc) {
  //declare var to capture result.  initialize it with the val, as we have to pass this to the function first
  let result = val;

  //loop through the array of functions
  for (let i = 0; i < arrayOfFunc.length; i++) {
    //get the current function from the array of functions
    let curFunc = arrayOfFunc[i];
    //call the function, by passing it whatever value is in result,
    //and capture the return also in result, as we have to pass it to the next function
    result = curFunc(result);
  }

  //return the final value in result
  return result;
}
