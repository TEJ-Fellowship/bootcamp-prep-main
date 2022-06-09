// YOUR CODE BELOW
// Define an object me
let me2 = {
  //that has a property name
  name: "Rushil",
  // and has a method getGreeting
  // that takes an object 'obj' as a parameter
  getGreeting: function (obj) {
    //which returns the following string containg
    //the value of the name variable in 'this' object
    //and the value of the name variable in the 'obj' object, obj.name
    return `Hi ${obj.name}, my name is ${this.name}.`;
  },
};
