// YOUR CODE BELOW
function whosASpecial(pets) {
  //declare empty string to capture our result
  let result = "";

  //foreach through the pets
  pets.forEach((x) => {
    //add the correct sentence to our result
    result += ` ${x.name} the ${x.species} is very special!`;
  });

  //trim the white space from beginning of string and return it
  return result.trim();
}
