let numSum = "10" + 20;
console.log("'10' + 20 is", numSum);
console.log(`${numSum} typeof is`, typeof numSum);

let str = "niru";

if (str) {
  console.log("The value of variable str is true");
} else {
  console.log("The value of variable str is false");
}

// Testing if using division on string will result in NaN
let isItNAN = 1 / str;
console.log(`1 / ${str} is`, isItNAN);

// Testing if coercing a string to number will result in NaN
// let newStr1 = "hello there";
let newStr1 = "123ab456";
let numStr = Number(newStr1);
// coercing string to number does result in NaN
console.log(`Number(${numStr}) is`, numStr);

console.log(`typeof ${newStr1} is`, typeof newStr1);
//data type of NaN is 'number'
console.log(`typeof ${numStr} is`, typeof numStr);

// "true" double equals true is not true!!
// this is why you should not use == double equals
// 1st example of "true" is not equal to true
let notSure = false == "false";
console.log(`false == "false" evaluates to`, notSure);

// 2nd example of "true" is not equal to true
if ("true" == true) {
  console.log("true == 'true' is true");
} else {
  console.log("true == 'true' is false");
}
