/*
  if (type === "starter") {
    price = 0;
  } else if (type === "professional") {
    price = 20;
  } else if (type === "organization") {
    price = 50;
  }
  */

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }
// Change code above this line
  return price;
}

console.log(getSubscriptionPrice("professional"));

console.log(getSubscriptionPrice("organization"));

console.log(getSubscriptionPrice("starter"));