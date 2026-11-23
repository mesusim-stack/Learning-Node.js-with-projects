// ============================================================
// LESSON 3 · EXERCISE — Gradebook
// Run with:  node exercises/gradebook.js
//
// You have a list of students. Answer these questions:
//   1. Print every student like: "Ana scored 88"
//   2. Print the class average (1 decimal place)
//   3. Print only the names of students who passed (grade >= 75)
//   4. Print the name of the student with the HIGHEST grade
// ============================================================

const students = [
  { name: "Ana", grade: 88 },
  { name: "Ben", grade: 72 },
  { name: "Carla", grade: 95 },
  { name: "Dan", grade: 61 },
  { name: "Eve", grade: 79 },
];

// TODO 1 — print each student (hint: forEach)

// TODO 2 — average: sum all grades with reduce, divide by students.length

// TODO 3 — passing names: filter grade >= 75, then map to just the name,
//          then print them joined with ", " (hint: .join(", "))

// TODO 4 — highest: reduce to the student object with the biggest grade,
//          then print their name
