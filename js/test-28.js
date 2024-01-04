function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    
    default:
      message = "Access denied, wrong password!";
  }
  // Change code above this line
  return message;
}

console.log(checkPassword("mangohackzor"));

console.log(checkPassword(null));

console.log(checkPassword("polyhax"));

console.log(checkPassword("jqueryismyjam"));