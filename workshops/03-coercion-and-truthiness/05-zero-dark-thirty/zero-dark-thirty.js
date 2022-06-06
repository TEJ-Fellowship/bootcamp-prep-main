// YOUR CODE BELOW
function zeroDarkThirty(num) {
  //   "102302"
  let strName = String(num);
  let result = "";

  for (let i = 0; i < strName.length; i++) {
    //"0"
    if (strName[i] !== "0") {
      result = result + strName[i];
    }
  }

  return Number(result);
}

let ret = zeroDarkThirty(102302); // => 1232

console.log(ret);
console.log(typeof ret);
