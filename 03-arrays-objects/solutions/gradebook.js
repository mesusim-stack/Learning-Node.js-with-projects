// ============================================================
// LESSON 3 · SOLUTION — Gradebook
// Run with:  node solutions/gradebook.js
// ============================================================

const students = [
  { name: "Ana", grade: 88 },
  { name: "Ben", grade: 72 },
  { name: "Carla", grade: 95 },
  { name: "Dan", grade: 61 },
  { name: "Eve", grade: 79 },
];

// ---- 1. Print each student ----
students.forEach((student) => {
  console.log(`${student.name} scored ${student.grade}`);
});

// ---- 2. Class average ----
// reduce gives us ONE value (the total), then we divide by the count.
const total = students.reduce((sum, student) => sum + student.grade, 0);
const average = total / students.length;
console.log(`Class average: ${average.toFixed(1)}`);

// ---- 3. Names of passing students ----
// filter keeps only passing students → map turns each object into just a name.
const passingNames = students
  .filter((student) => student.grade >= 75)
  .map((student) => student.name);
console.log(`Passing: ${passingNames.join(", ")}`);

// ---- 4. Student with the highest grade ----
// reduce walks the list. `best` starts as the first student.
// Each round: keep whichever grade is higher.
const topStudent = students.reduce((best, student) =>
  student.grade > best.grade ? student : best
);
console.log(`Top student: ${topStudent.name} (${topStudent.grade})`);
