function superFunction(num) {
  console.log(num);

  if (num > 0) {
    superFunction(num - 1);
  }
}

superFunction(5);
superFunction(0);
superFunction(10);
