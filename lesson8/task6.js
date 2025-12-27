const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortList = numbersList.slice().sort((a, b) => a - b);

console.log("Initial list: " + numbersList);
console.log("Sorted list: " + sortList);
