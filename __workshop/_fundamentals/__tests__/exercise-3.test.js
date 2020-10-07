const { fullName, people } = require("../exercise-3");

test("Exercise 3", () => {
  expect(fullName(people)).toStrictEqual([
    "Alyssa P. Hacker",
    "Ben Bitdiddle",
    "Eva Lu Ator",
    "Lem E. Tweakit",
    "Louis Reasoner",
    "Shahan Haig Krakirian",
  ]);

  expect(fullName([
    {name:{ first: "Paul", middle: "Thomas", last: "Anderson"}, grade: "A"},
    {name:{ first: "Daniel", middle: "Dae", last: "Kim"}, grade: "D"},
    {name:{ first: "Maya", last: "Angelou"}, grade: "B"},])).toStrictEqual([
    "Paul Thomas Anderson",
    "Daniel Dae Kim",
    "Maya Angelou",
  ]);

  expect(fullName([
    {name:{ first: "Paul", middle: "Thomas", last: "Anderson", surname: "PTA"}, grade: "A"},
    {name:{ first: "Daniel", middle: "Dae", last: "Kim", surname: "Danny"}, grade: "D"},
    {name:{ first: "Maya", last: "Angelou", surname:"Mama"}, grade: "B"},])).toStrictEqual([
    "Paul Thomas Anderson",
    "Daniel Dae Kim",
    "Maya Angelou",
  ]);
});
