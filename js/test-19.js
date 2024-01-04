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
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost);
// 500
*/

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword("mangohackzor"));

console.log(checkPassword(null));

console.log(checkPassword("polyhax"));

console.log(checkPassword("jqueryismyjam"));