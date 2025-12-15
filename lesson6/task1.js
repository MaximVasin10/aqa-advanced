//1
function rectangleSquare(height, width) {
  return height * width;
}

console.log("Function declaration: " + rectangleSquare(5, 10));

//2
const square = function (height, width) {
  return height * width;
};

console.log("Function expression: " + square(2, 5));

//3
const square2 = (height, width) => height * width;

console.log("Arrow function expression: " + square2(2, 3));
