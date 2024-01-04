function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    const result = customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${result} credits left`;
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(3000, 5, 23000));

console.log(makeTransaction(1000, 3, 15000));

console.log(makeTransaction(5000, 10, 8000));

console.log(makeTransaction(2000, 8, 10000));