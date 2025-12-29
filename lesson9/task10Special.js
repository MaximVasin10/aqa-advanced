console.log("Calculator with operation history");

const operations = [
  { operation: "+", value: 10 },
  { operation: "-", value: 3 },
  { operation: "+", value: 5 },
];

const operations2 = [
  { operation: "+", value: 10 },
  { operation: "*", value: 3 },
  { operation: "/", value: 2 },
];

const operations3 = [
  { operation: "+", value: 10 },
  { operation: "*", value: 3 },
  { operation: "/", value: 0 },
];

function calculate(operations) {
  let result = 0;

  for (const { operation, value } of operations) {
    switch (operation) {
      case "+":
        result += value;
        break;

      case "-":
        result -= value;
        break;

      case "*":
        result *= value;
        break;

      case "/":
        if (value === 0) {
          console.error("Impossible to divide by zero");
          return null;
        }
        result /= value;
        break;

      default:
        console.warn(`Unknown operation: ${operation}`);
    }
  }

  return result;
}

console.log(calculate(operations));
console.log(calculate(operations2));
console.log(calculate(operations3));
