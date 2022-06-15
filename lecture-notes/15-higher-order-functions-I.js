/*
- Functions can be put wherever other data types can be put
    - Var, array, object, pass as argument, return 
- Passing function & arg to function, that will call it
    - Writing your own forEach
        - Array of Vals, one function
    - .forEach function
        - forEach does not return anything
*/

//functionCaller takes 2 arguments, func and arg
// func: it expects it to be a function
// arg: it expects it to be an array
function functionCaller(func, arg) {
  let result = [];
  //loop through the array that is in variable arg
  for (let i = 0; i < arg.length; i++) {
    //then call the function in func with the current element in the array
    let iResult = func(arg[i]);
    //console.log the returned value
    console.log(iResult);
    //push the returned value into our result array
    result.push(iResult);
  }

  //return the array
  return result;
}

//just a normal function that excepts a parameter
//and prints 'hello ' + whatever is in that parameter
function sayHello(name) {
  let result = `hello ${name}`;
  console.log(result);

  return result;
}

let myArray = [100, "raju", "subash", "sandhya"];
// myArray = "Amir again";

//the .forEach method of array, expects the argument to be a function
//then, it calls that function in a loop by passing it each element from the array
myArray.forEach(function myHello(x) {
  console.log(`hello ${x}`);
});

// let someResult = functionCaller(sayHello, myArray);
// console.log(someResult);

// let sayHello2 = sayHello("TEJ");
// let sayHello3 = [sayHello, 1, sayHello("Niru")];

// console.log(sayHello2);
// console.log(sayHello3);
