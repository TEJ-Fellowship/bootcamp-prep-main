// YOUR CODE BELOW
function lastFridayNight(trArr) {
  // declare variable to calculate sum
  let sum = 0;
  for (let i = 0; i < trArr.length; i++) {
    sum += trArr[i].amount;
  }
  return sum;
}
