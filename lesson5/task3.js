let specialNumber = 8;

console.log("Multiplication table for " + specialNumber + " number.\n");

for (let i = 1; i <= 10; i++) {
  console.log(specialNumber + " * " + i + " = " + specialNumber * i);
}

console.log("\n=============================\n");

let counter = 1;
while (counter <= 10) {
  console.log(
    specialNumber + " * " + counter + " = " + specialNumber * counter
  );
  counter++;
}
