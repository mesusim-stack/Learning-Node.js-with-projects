// ============================================================
// LESSON 3 · FILE 3 — array-methods.js
// Run with:  node examples/03-array-methods.js
//
// These methods are the bread and butter of JavaScript.
// Each one takes a CALLBACK FUNCTION — a function you pass in,
// which the method calls for every item.
// ============================================================

const scores = [45, 82, 91, 67, 50, 78];

// ---- forEach: do something with each item (returns nothing) ----
scores.forEach(function (score) {
  console.log("Score:", score);
});

// Shorter version with an arrow function:
scores.forEach((score) => console.log("Again:", score));

// ---- map: TRANSFORM each item → new array of the same length ----
const doubled = scores.map((score) => score * 2);
console.log("Doubled:", doubled); // [90, 164, 182, 134, 100, 156]

// ---- filter: KEEP only items that pass a test → shorter array ----
const passing = scores.filter((score) => score >= 75);
console.log("Passing:", passing); // [82, 91, 78]

// ---- find: return the FIRST item that passes a test ----
const firstPerfect = scores.find((score) => score === 100);
console.log("First perfect:", firstPerfect); // undefined (none exist)

// ---- reduce: boil the whole array down to ONE value ----
// (total, score) => new total     ... starting from 0
const sum = scores.reduce((total, score) => total + score, 0);
console.log("Sum:", sum);                     // 413
console.log("Average:", sum / scores.length); // ~68.83

// ---- Chaining! Each method returns a new array, so you can stack them ----
const passingScores = scores.filter((s) => s >= 75); // [82, 91, 78]
const passingSum = passingScores.reduce((sum, s) => sum + s, 0);
console.log("Average of passing:", (passingSum / passingScores.length).toFixed(2));

// ---- String methods you'll use constantly ----
const message = "  Hello Node  ";
console.log(message.trim());                 // "Hello Node" (removes spaces at ends)
console.log(message.trim().toUpperCase());   // "HELLO NODE"
console.log("javascript".includes("script")); // true
console.log("a,b,c".split(","));             // [ 'a', 'b', 'c' ]
console.log(["a", "b"].join(" and "));       // "a and b"

// ---- TRY THIS ----
// 1. Use map to turn scores into labels: "Pass" if >= 75, else "Fail".
// 2. Use filter to get scores below 60.
// 3. Use reduce to find the HIGHEST score (hint: return the bigger of the two).
