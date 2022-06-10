/*
ARRAYS I
- what's an array?
- bracket access, bracket assignment
- .length property

- typeof []
- Array.isArray

- basic methods: method so (), not []
  - push / pop
  - shift / unshift
  - reverse: mutates the string
  - similar to string
    - indexOf
    - includes
    - slice
      - slice(1,2), slice(1), slice(): copy
*/

let names = ["a", "b", "c", 1, 2, 3];

console.log(names.push(3));
console.log(names);
console.log(names.pop(2));
console.log(names);
console.log(names.reverse());
console.log(names);
console.log(names.splice());
console.log(names);
console.log(names.splice(2, 1, 4, 4));
console.log(names);

names = [6, "hey", "there", 2];
console.log(names.splice(3, 0, "you"));
console.log(names);
