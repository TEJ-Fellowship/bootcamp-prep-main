// YOUR CODE BELOW
function callCount() {
  //declare a variable, count, to keep track of number of times internal function is called
  let count = 0;
  function someFunc() {
    //each time someFunc is called, increase the count by 1
    count++;
    //return the current count
    return count;
  }

  //return the func that counts the number of times it is called
  return someFunc;
}
