// YOUR CODE BELOW
//define function that take default name and age
function getDogBreeder(name, age) {
  //the returned function takes 2 parameters
  function getDog(para1, para2) {
    //if para2 is defined
    if (para2) {
      //then we know para2 is age
      age = para2;
      //para1 is name
      name = para1;
      //else if only para1 is defined
    } else if (para1) {
      //then it could be name or age
      //if the typeof para1 is string
      if (typeof para1 === "string") {
        //then it is name
        name = para1;
      } else {
        //else is should be age
        age = para1;
      }
    }
    //return the required object
    return { name, age };
  }

  return getDog;
}
