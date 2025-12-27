const numbers = [1, 2, 3, 4, 5];

function doubleIndex(array) {
  return array.map((num) => num * num);
}
console.log("start values: " + numbers);
console.log("doubled values: " + doubleIndex(numbers));
