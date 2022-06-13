// YOUR CODE BELOW
function mySplice(arr, startIdx, count, replace) {
  //variable to store removed Array
  let removedArray = [];
  //variable to store newly formed spliced array
  let splicedArray = [];

  //first, lets collect all elements from input up to the startIdx in our splicedArray
  for (let i = 0; i < startIdx; i++) {
    splicedArray.push(arr[i]);
  }

  //now, add the replace element at the startIdx to splicedArray
  if (replace) splicedArray[startIdx] = replace;

  //now, record the removed elements upto count into removedArray
  for (let i = startIdx; i < startIdx + count; i++) {
    removedArray.push(arr[i]);
  }

  //then, push the remaining elements into splicedArray
  for (let i = startIdx + count; i < arr.length; i++) {
    splicedArray.push(arr[i]);
  }

  //now, lets empty out the input array
  while (arr.length) {
    arr.pop();
  }
  arr.pop();

  //and fill the elements from spliced array into the input array
  for (let i = 0; i < splicedArray.length; i++) {
    arr.push(splicedArray[i]);
  }

  return removedArray;
}
