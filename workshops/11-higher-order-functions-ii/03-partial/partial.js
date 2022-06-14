// YOUR CODE BELOW
//partial takes a function, and a parameter argA
function partial(func, argA) {
  //the function to return takes a parameter argB
  function somePartial(argB) {
    //this function should call the function func by passing it argA and argB
    let result = func(argA, argB);
    //return this result
    return result;
  }
  return somePartial;
}
