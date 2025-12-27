const numbersList = [9, 10, 14, 12, 1, 5, 100, 34];

function differenceBetweenSmallestAndLargestValues(array) {
  const sortedArray = array.sort((a, b) => a - b);
  return console.log(
    "Difference between largest and smallest values: " +
      (sortedArray[sortedArray.length - 1] - sortedArray[0])
  );
}

console.log("Initial list: " + numbersList);
differenceBetweenSmallestAndLargestValues(numbersList);
