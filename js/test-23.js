/*
console.log(!true);
// false
console.log(!false);
// true
console.log(!3);
// !3 -> !true -> false
console.log(!"Mango");
// !'Mango' -> !true -> false
console.log(!0);
// !0 -> !false -> true
console.log(!"");
// !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline;

// !isOnline -> !true -> false
*/

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17));

console.log(isNumberNotInRange(10, 30, 5));

console.log(isNumberNotInRange(20, 50, 24));

console.log(isNumberNotInRange(20, 50, 76));