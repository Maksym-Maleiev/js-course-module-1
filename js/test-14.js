/*
// ❌ Погано, виконується приведення типів
console.log(5 == "5");
// true
console.log(5 != "5");
// false
console.log(1 == true);
// true
console.log(1 != true);
// false

// ✅ Добре, приведення типів не виконується
console.log(5 === "5");
// false
console.log(5 === 5);
// true
console.log(5 !== "5");
// true
console.log(5 !== 5);
// false 
console.log(1 === true);
// false
console.log(1 !== true);
// true
*/

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

console.log(isValidPassword("mangodab3st"));

console.log(isValidPassword("kiwirul3z"));

console.log(isValidPassword("jqueryismyjam"));