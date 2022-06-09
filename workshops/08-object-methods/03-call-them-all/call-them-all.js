// YOUR CODE BELOW
function callThemAll(obj, val) {
  // lets declare our result as an empty array
  // since we are expected to return an array
  let result = [];

  // now, we have to loop through all the key/value pairs of 'obj' object
  for (let key in obj) {
    // lets put the current value of the object in 'curValue'
    let curValue = obj[key];

    // check if curValue is a function
    if (typeof curValue === "function") {
      // if it is a function, then call it
      // using the 'val' that was passed into our main function
      let funcReturn = curValue(val);
      // then push the returned value into our result array
      result.push(funcReturn);
    }
  }

  //finally, return the result array
  return result;
}
