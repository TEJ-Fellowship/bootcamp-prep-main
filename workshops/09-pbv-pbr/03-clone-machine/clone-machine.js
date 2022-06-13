// YOUR CODE BELOW
function cloneMachine(obj) {
  //initialize empty object, because we need to return an object
  let clone = {};

  //now lets copy all key value pairs from obj to clone
  for (let i in obj) {
    // for all keys i in obj,
    // lets create the same key in clone and assign what value in holds in obj
    clone[i] = obj[i];
  }

  //change the name of clone to add clone
  clone.name = clone.name + "Clone";

  //now, for the clone, we need to overwrite the offspring key with empty array
  //otherwise - it would still reference the offspring value from obj
  clone.offspring = [];

  //now, push the clone name into the offspring value of obj
  obj.offspring.push(clone.name);

  return clone;
}
