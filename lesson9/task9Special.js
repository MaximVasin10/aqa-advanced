console.log("Analyze result of the tests");

const testResultsPassed = [
  { name: "Login test", passed: true },
  { name: "Checkout test", passed: true },
  { name: "Profile test", passed: true },
];

const testResultsFailed = [
  { name: "Login test", passed: true },
  { name: "Checkout test", passed: false },
  { name: "Profile test", passed: true },
];

function analyzeTests(testResults) {
  let isFailed = false;
  let passed = 0;
  let failed = 0;
  let status = "";

  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i].passed) {
      passed++;
    } else {
      failed++;
    }
  }

  if (failed > 0) {
    status =
      "One of the tests is failed. Passed rate: " +
      (passed * 100) / (passed + failed) +
      "%";
  } else {
    status = "Build passed(100%)";
  }

  return {
    passed: passed,
    failed: failed,
    status: status,
  };
}

console.log(analyzeTests(testResultsFailed));
console.log(analyzeTests(testResultsPassed));
