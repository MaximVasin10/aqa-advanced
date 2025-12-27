const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

function arrayAverage(array) {
  if (array === null || array.length === 0) {
    return console.log("Array is empty.");
  }

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log("Average number of array: " + sum / array.length);
}

console.log("Initial list: " + numbersList);
arrayAverage(numbersList);
