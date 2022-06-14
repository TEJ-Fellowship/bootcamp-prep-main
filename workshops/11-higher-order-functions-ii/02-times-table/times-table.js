// YOUR CODE BELOW
// timetable function will take one number, num1
function timesTable(num1) {
  // the function to return will take another number num2
  function someTable(num2) {
    //the returned function
    //returns the multiplication of the value passed to it, num2,
    // with the number passed to the maker function, num1
    let result = num1 * num2;
    return result;
  }
  return someTable;
}
