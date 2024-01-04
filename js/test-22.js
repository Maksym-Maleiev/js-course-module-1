/*
const age = 5;
console.log(age < 10 || age > 30);
// true || false -> true
*/

/*
const age = 40;
console.log(age < 10 || age > 30);
// false || true -> true
*/

/*
const age = 20;
console.log(age < 10 || age > 30);
// false || false -> false
*/

/*
console.log(true || false);
// true
console.log(false || true);
// true
console.log(true || true);
// true
console.log(3 || false);
// 3
console.log(false || 3);
// 3
console.log(3 || true);
// 3
console.log(true || 3);
// true
*/

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));

console.log(checkIfCanAccessContent("starter"));

console.log(checkIfCanAccessContent("vip"));

console.log(checkIfCanAccessContent("free"));