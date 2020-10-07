const { avgAge, people } = require("../exercise-2");

const pets = [
{name: "lili", age: 2},
{name: "tofu", age: 6},
{name: "bob", age: 15},
];


test("Exercise 2", () => {
  expect(avgAge(people)).toBe(31);
  expect(avgAge(pets)).toBe(8);
  expect(avgAge([{name:"anna", age:27},{name:"kat", age:45},{name:"ryan", age:96}])).toBe(56);
});
