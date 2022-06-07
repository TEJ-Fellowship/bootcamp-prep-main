// YOUR CODE BELOW
function mySlice(arr, start = 0, end = arr.length) {
  let ret = [];

  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;

  for (let i = start; i < end; i++) {
    ret.push(arr[i]);
  }

  return ret;
}
