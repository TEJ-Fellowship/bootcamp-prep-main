// YOUR CODE BELOW
function billerBuilder(state) {
  function retBiller(amount) {
    if (state === "NY") {
      return amount * 1.03 * 1.04;
    } else {
      return amount * 1.05 * 1.06625;
    }
  }

  return retBiller;
}
