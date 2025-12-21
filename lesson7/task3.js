function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    return "One of the parameters is not a number.";
  } else if (numerator === 0 || denominator === 0) {
    return "One of the parameters is '0'";
  }

  return numerator / denominator;
}

try {
  console.log(divide(16, 4));
} catch (error) {
  console.error("Error: ", error.message);
} finally {
  console.log("Function completed");
}

try {
  console.log(divide(0, 4));
} catch (error) {
  console.error("Error: ", error.message);
} finally {
  console.log("Function completed");
}

try {
  console.log(divide(16, "string"));
} catch (error) {
  console.error("Error: ", error.message);
} finally {
  console.log("Function completed");
}
