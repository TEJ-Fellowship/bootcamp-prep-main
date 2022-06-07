// YOUR CODE BELOW
function myLastIndexOf(arr, target, idx) {
  if (!idx) idx = arr.length - 1;
  let retIdx = -1;
  for (let i = 0; i <= idx; i++) {
    if (arr[i] === target) retIdx = i;
  }
  return retIdx;
}
