console.log("Password validation");

const ANY_NUMBER = /\d/;
const ANY_LETTER = /[a-zA-Z]/;

function containsNumber(str) {
  return ANY_NUMBER.test(str);
}

function containsLetter(str) {
  return ANY_LETTER.test(str);
}

function validatePassword(password, repeatPassword) {
  if (password !== repeatPassword) {
    return console.log("Passwords do not match");
  }

  if (!containsNumber(password)) {
    return console.log("Password must contain a number");
  } else if (!containsLetter(password)) {
    return console.log("Password must contain a letter");
  } else if (password.length < 8) {
    return console.log("Password too short");
  } else {
    return console.log("Password is valid");
  }
}

validatePassword("Great123", "Great1234");
validatePassword("Greatness", "Greatness");
validatePassword("12345678", "12345678");
validatePassword("Great123", "Great123");
