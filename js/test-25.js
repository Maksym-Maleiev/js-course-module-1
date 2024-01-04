/*
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type);
// "adult"
*/

/*
const age = 20;
const type = age >= 18 ? "adult" : "child";

console.log(type);
*/

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));

console.log(checkStorage(100, 130));

console.log(checkStorage(200, 20));

console.log(checkStorage(200, 150));

console.log(checkStorage(150, 180));