let numSum = "10" + 20;
console.log(numSum);

let str = "niru";

if (str) {
  console.log("this is true");
} else {
  console.log("this is false");
}

// Testing if using division on string will result in NaN
let isItNAN = 1 / str;
console.log(isItNAN);

// Testing if coercing a string to number will result in NaN
// let newStr1 = "hello there";
let newStr1 = "123ab456";
let numStr = Number(newStr1);
// coercing string to number does result in NaN
console.log(numStr);

console.log(typeof newStr1);
//data type of NaN is 'number'
console.log(typeof numStr);

// "true" double equals true is not true!!
// this is why you should not use == double equals
// 1st example of "true" is not equal to true
let notSure = true == "true";
console.log(notSure);

// 2nd example of "true" is not equal to true
if ("true" == true) {
  console.log("true is true");
} else {
  console.log("true is false");
}
