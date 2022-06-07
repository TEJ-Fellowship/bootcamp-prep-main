// YOUR CODE BELOW
function myJoin(arr, sep = ",") {
  let ret = "";

  for (let i = 0; i < arr.length - 1; i++) {
    let val = arr[i];
    if (!val) val = "";
    ret += val + sep;
  }
  ret += arr[arr.length - 1];

  return ret;
}
