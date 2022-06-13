// YOUR CODE BELOW
function deeperCopy(arr) {
  //declare variable to store the copy
  let retArr = [];
  //looping through the input array
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    //if the current element is not an array
    if (!Array.isArray(currVal)) {
      //then just push it into the copy array
      retArr.push(currVal);
    } else {
      //if the element is an array, then create new array to put it in
      let innerArray = [];
      //loop through the inner array
      for (let j = 0; j < currVal.length; j++) {
        //push the values into the new array
        innerArray.push(currVal[j]);
      }
      //then push this new array into our copy array
      retArr.push(innerArray);
    }
  }

  return retArr;
}
