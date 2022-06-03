// YOUR CODE BELOW
function onlyOdds(num) {
  if (num < 1) return 0;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    let remainder = i % 2;
    if (remainder === 1) {
      sum += i;
    }
  }
  return sum;
}
