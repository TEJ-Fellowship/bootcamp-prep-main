// YOUR CODE BELOW
//stringify takes a function as parameter
function stringify(func) {
  function someFunc() {
    // someFunc calls the function, func
    let rawResult = func();
    //then coerces the result to a string
    let result = String(rawResult);
    //then return the result
    return result;
  }
  return someFunc;
}
