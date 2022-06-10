/*
OBJECTS:
- look at existing methods on objects we have used before
  - e.g. array.push
- write your own simple method
- write your own method with parameter
  - parameter is a function
- write your own method with this
*/

/*
PROBLEMS to go through
- call them all: calling function inside function, like callback function
- taco cat inc: very involved
*/

/* 1. this is resolved only when function is called */
//declare an obj
let obj = { name: "raju" };

//declare a function that refers to this
function f() {
  return `hello from ${this.name}`;
}

//create a new key value pair in object
//where we assign the key 'hello', with the function 'f'
obj.hello = f;

//now, when we call the function obj.hello(),
//this keyword in method refers to the object 'obj'
console.log(obj.hello());

/* 2. function can take another function as parameter */
//declare a function someFunc, that takes one parameter
function someFunc(n) {
  //and it executes that parameter
  n();
}

//declare a function sayHello that prints into the console
function sayHello() {
  console.log("hello there");
}

//now, call the function someFunc and pass it the function sayHello
someFunc(sayHello);
