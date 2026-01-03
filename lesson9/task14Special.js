function amountNumbersSmallerRight(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    resultArray.push(count);
  }

  return resultArray;
}

console.log(amountNumbersSmallerRight([5, 4, 3, 2, 1]));
console.log(amountNumbersSmallerRight([1, 2, 3, 0]));
console.log(amountNumbersSmallerRight([1, 2, 3, 4]));
console.log(amountNumbersSmallerRight([5, 1, 4, 2]));
