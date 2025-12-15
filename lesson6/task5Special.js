function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(0.2));
