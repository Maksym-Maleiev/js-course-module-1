/*
const age = 20;
console.log(age > 10 && age < 30);
*/

/*
const age = 50;
console.log(age > 10 && age < 30);
// true && false -> false
console.log(age > 80 && age < 120);
// false && true -> false
*/

/*
console.log(true && false);
// false
console.log(false && true);
// false
console.log(true && true);
// true
console.log(3 && false);
// false
console.log(false && 3);
// false
console.log(3 && true);
// true
console.log(true && 3);
// 3
*/

/*
console.log(1 && 5);
// true && true -> 5
console.log(5 && 1);
// true && true -> 1
console.log(0 && 2);
// false && true -> 0
console.log(2 && 0);
// true && false -> 0
console.log("" && "Mango");
// false && true -> ''
console.log("Mango" && "");
// true && false -> ''
console.log("Mango" && "Poly");
// true && true -> 'Poly'
console.log("Poly" && "Mango");
// true && true -> 'Mango'
*/

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));

console.log(isNumberInRange(10, 30, 5));

console.log(isNumberInRange(20, 50, 24));

console.log(isNumberInRange(20, 50, 76));