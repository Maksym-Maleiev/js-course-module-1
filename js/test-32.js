/*
const productName = "Repair droid";

console.log(productName.slice(0, 4));
// "Repa"
console.log(productName.slice(3, 9));
// "air dr"
console.log(productName.slice(0, productName.length));
// "Repair droid"
console.log(productName.slice(7, productName.length));
// "droid"
*/

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

console.log(getSubstring("Hello world", 3));

console.log(getSubstring("Hello world", 6));

console.log(getSubstring("Hello world", 8));