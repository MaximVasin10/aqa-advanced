let person = {
  firstName: "Kharkiv",
  lastName: "Best",
  age: 371,
};

person.email = "kharkiv_best_city_in_the_world@mail.com";
delete person.age;

console.log(person);
