let users = [
  {
    age: 5,
    name: "Kostya",
    mail: "test@mail.com",
    phone: "3806666666",
  },
  {
    age: 55,
    name: "Olya",
    mail: "test2@mail.com",
    phone: "2345643245",
  },
  {
    age: 7,
    name: "Dima",
    mail: "test3@mail.com",
    phone: "235643245",
  },
];

for (const { name, age, mail, phone } of users) {
  console.log(
    `Age: ${age} \n Name is: ${name} \n mail: ${mail} \n phone: ${phone}  \n\n`
  );
}
