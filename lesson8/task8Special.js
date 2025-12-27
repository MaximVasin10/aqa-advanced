const numbersList = [9, 10, 14, 12, 4, 5, 43, 34];

function sumLowestPositiveValues(array) {
  const filteredArray = array.filter((a) => a >= 0);
  const sortedArray = filteredArray.sort((a, b) => a - b);
  return console.log(
    "Sum of two smallest positive values: " + (sortedArray[0] + sortedArray[1])
  );
}

console.log("Initial list: " + numbersList);
sumLowestPositiveValues(numbersList);
