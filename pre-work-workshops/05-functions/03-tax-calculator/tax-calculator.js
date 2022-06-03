// YOUR CODE BELOW
function taxCalculator(x, state) {
  if (state === "NY") {
    return x * 1.04;
  }

  if (state === "NJ") {
    return x * 1.06625;
  }
}
