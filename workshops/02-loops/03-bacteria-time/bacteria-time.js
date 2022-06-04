// YOUR CODE BELOW
function bacteriaTime(curr, target) {
  if (target < curr) return "targetNum must be larger than currentNum";
  let time = 0;
  for (let i = curr; i < target; i += i) {
    time += 20;
  }
  return time;
}
