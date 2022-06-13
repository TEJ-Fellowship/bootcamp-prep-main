// YOUR CODE BELOW
function myForEach(array, func) {
  //looping through the array
  for (let i = 0; i < array.length; i++) {
    //getting the current value
    let curVal = array[i];
    //then call the func with curVal as first argument, and current index as second argument
    func(curVal, i);
  }
}
