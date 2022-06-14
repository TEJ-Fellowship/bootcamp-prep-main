// YOUR CODE BELOW
function cacheSavings(func) {
  //lets create a basic hash table
  let cached = {};
  function cachedFunc(param) {
    //for any parameter used to call the func
    //if the param has already been used before
    //we can just get the value stored against the param as key from our hash table
    if (cached[param]) return cached[param];
    else {
      //if the param has not been passed before
      //then call the function with the parameter, and store in result
      let result = func(param);
      //enter the param as key, and result as value in hash table
      cached[param] = result;
      return result;
    }
  }

  return cachedFunc;
}
