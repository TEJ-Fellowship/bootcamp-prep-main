// YOUR CODE BELOW
function reverseArray(arr) {
  //declare variable to capture reversed array
  let rev = [];

  //lets go from reverse of our input
  for (let i = arr.length - 1; i >= 0; i--) {
    // and push the reversed order value into rev
    rev.push(arr[i]);
  }

  //now, lets loop through rev
  for (let i = 0; i < rev.length; i++) {
    //and assign the values from rev to input array
    arr[i] = rev[i];
  }

  return arr;
}
