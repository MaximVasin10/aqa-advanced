function divisors(number) {
  let divisors = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      divisors++;
    }
  }
  return divisors;
}

console.log(divisors(4));
console.log(divisors(5));
console.log(divisors(12));
console.log(divisors(30));
