const car1 = {
  brand: undefined,
  model: undefined,
  year: undefined,
};

const car2 = {
  brand: undefined,
  model: undefined,
  owner: undefined,
};

const car3 = { ...car1, ...car2 };

console.log(car1);
console.log(car2);
console.log(car3);
