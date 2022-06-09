// YOUR CODE BELOW
function dogBreeder(v1, v2) {
  let name;
  let age;
  if (v2) {
    name = v1;
    age = v2;
  } else if (v1) {
    if (typeof v1 === "string") {
      name = v1;
      age = 0;
    } else {
      name = "Steve";
      age = v1;
    }
  } else {
    name = "Steve";
    age = 0;
  }
  return { name, age };
}
