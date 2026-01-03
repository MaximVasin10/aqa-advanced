function rentPrice(days) {
  if (days >= 7) {
    return days * 40 - 40;
  } else if (days >= 3) {
    return days * 40 - 20;
  } else {
    return days * 40;
  }
}

console.log(rentPrice(2));
console.log(rentPrice(3));
console.log(rentPrice(7));
console.log(rentPrice(5));
