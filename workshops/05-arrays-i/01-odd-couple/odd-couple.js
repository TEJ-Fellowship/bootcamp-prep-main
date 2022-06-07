// YOUR CODE BELOW
function oddCouple(num) {
  let ret = [];
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (count === 2) break;
    if (num[i] % 2 === 1) {
      ret.push(num[i]);
      count++;
    }
  }

  return ret;
}
