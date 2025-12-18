function handleEven() {
  console.log("Number is even.");
}

function handleOdd() {
  console.log("Number is odd.");
}

function handleNum(number, even, odd) {
  if (number % 2 === 0) {
    even();
  } else {
    odd();
  }
}

handleNum(6, handleEven, handleOdd);
handleNum(5, handleEven, handleOdd);
