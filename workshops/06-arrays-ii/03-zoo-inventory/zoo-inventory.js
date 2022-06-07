// YOUR CODE BELOW
function zooInventory(arr) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i][0];
    let type = arr[i][1][0];
    let age = arr[i][1][1];
    retArr.push(`${name} the ${type} is ${age}.`);
  }
  return retArr;
}
