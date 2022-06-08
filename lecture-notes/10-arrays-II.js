/*
ARRAYS II
- to cover:
  - arrays can contain other arrays (multi dimensional array)
  - looping through two dimensional array -> nested for loop
  - using modulus in loop

- splice: mutates the array
  - return value
  - in place value
  - insert value
- join
- concat
*/

let mda = [123, [1, 2, 10], "hello"];
// to [123, 1, 2, 10, 'hello']
// required state is in variable fa, flatten mda to [123, 1, 2, 10, 'hello']

let fa = [];

for (let i = 0; i < mda.length; i++) {
  if (Array.isArray(mda[i])) {
    for (let j = 0; j < mda[i].length; j++) {
      fa.push(mda[i][j]);
    }
  } else {
    fa.push(mda[i]);
  }
}

// console.log(mda);
// console.log(fa);

console.log(Array.isArray(2));
console.log(Array.isArray(mda));
console.log(typeof mda);
