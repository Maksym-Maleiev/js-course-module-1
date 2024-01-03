/*
if (условие) {
  // тело if 
} else {
  // тело else 
}
*/

/*
let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost);
// 100
*/

/*
let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost);
// 0
*/

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20));

console.log(checkAge(8));

console.log(checkAge(14));

console.log(checkAge(38));