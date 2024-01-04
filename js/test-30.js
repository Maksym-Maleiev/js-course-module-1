/*
const productName = "Repair droid";
// Якщо у змінній зберігається рядок
console.log(productName.length);
// 12
// Якщо рядковий літерал
console.log("Repair droid".length);
// 12
*/

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

console.log(getNameLength("Poly"));

console.log(getNameLength("Harambe"));

console.log(getNameLength("Billy"));

console.log(getNameLength("Joe"));