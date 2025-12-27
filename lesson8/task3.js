const numbers = [10, 20, 30, 40, 50];

console.log("Start array: " + numbers);
console.log(
  "Reduce array: " +
    numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);
