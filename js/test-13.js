/*
const a = 2;
const b = 5;

console.log(a > b);
// false

console.log(b > a);
// true

console.log(a >= b);
// false

console.log(b >= a);
// true

console.log(a < b);
// true

console.log(b < a);
// false

console.log(a <= b);
// true

console.log(b <= a);
// false
*/

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

console.log(isAdult(20));

console.log(isAdult(14));

console.log(isAdult(8));

console.log(isAdult(37));