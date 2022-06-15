/*
- Function returning function
    - Number of times function called counter
    - Multiplication builder
*/

//functionReturner returns a function
function functionReturner(num1) {
  //a variable is declared within the scope of the outer function, functionReturner
  let numCalled = num1;

  //declaring a function called 'multiply' inside the scope of the function, functionReturner
  function multiply(num2) {
    //each time 'multiply' is called, it increments the variable 'numCalled'
    //which is a variable in the outer scope in functionReturner
    //this way, 'multiply' has access to 'numCalled' no matter how many times it executes
    numCalled++;
    console.log(`i got called ${numCalled} times`);
  }

  return multiply;
}

//someVar now has the function 'multiply', which is returned by functionReturner
let someVar = functionReturner(10);

//call someVar function 4 times
someVar(10);
someVar(10);
someVar(10);
someVar(10);
