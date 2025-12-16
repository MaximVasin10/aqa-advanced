let fullCost = 40;
let smallDiscount = 20;
let bigDiscount = 50;

function price(days) {
  if (days >= 7) {
    return (
      "Your final sum is " +
      (days * fullCost - bigDiscount) +
      ". Your discount: " +
      bigDiscount
    );
  } else if (days >= 3) {
    return (
      "Your final sum is " +
      (days * fullCost - smallDiscount) +
      ". Your discount: " +
      smallDiscount
    );
  } else {
    return "Your final sum is " + days * fullCost;
  }
}

console.log(price(1));
console.log(price(3));
console.log(price(5));
console.log(price(7));
