/*
console.log("saMsUng" === "samsung");
// false
console.log("saMsUng" === "SAMSUNG");
// false
*/

/*
const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput);
// 'saMsUng'
console.log(userInput === BRAND_NAME);
// false
console.log(normalizedToUpperCaseInput);
// 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME);
// true
*/

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

console.log(normalizeInput("Hello world"));

console.log(normalizeInput("This ISN'T SpaM"));

console.log(normalizeInput("Big SALE"));