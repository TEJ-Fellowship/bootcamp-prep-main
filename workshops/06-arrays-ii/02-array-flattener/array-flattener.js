// YOUR CODE BELOW
function arrayFlattener(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) newArr.push(arr[i]);
    else {
      let inArr = arr[i];
      for (let j = 0; j < inArr.length; j++) {
        newArr.push(inArr[j]);
      }
    }
  }
  return newArr;
}
