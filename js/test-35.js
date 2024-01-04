/*
const productName = "Repair droid";

console.log(productName.includes("a"));
// true
console.log(productName.includes("A"));
// false
console.log(productName.includes("droid"));
// true
console.log(productName.includes("Droid"));
// false
console.log(productName.includes("Repair"));
// true
console.log(productName.includes("repair"));
// false
*/

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

console.log(checkForName("Egor Kolbasov", "Egor"));

console.log(checkForName("Egor Kolbasov", "egor"));

console.log(checkForName("Egor Kolbasov", "egOr"));

console.log(checkForName("Egor Kolbasov", "Zhenya"));

console.log(checkForName("Vadim Nekrasov", "Vadim"));

console.log(checkForName("Vadim Nekrasov", "vadim"));

console.log(checkForName("Vadim Nekrasov", "Dima"));