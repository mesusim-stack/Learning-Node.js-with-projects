// ============================================================
// LESSON 1 · FILE 2 — variables.js
// Run with:  node examples/02-variables.js
//
// A variable is a named box that stores a value.
// ============================================================

// ---- let: a variable whose value can CHANGE later ----
let score = 0;          // put the number 0 in a box named "score"
console.log("Score is:", score);

score = 10;             // put a new value in the same box
console.log("Score is now:", score);

// ---- const: a variable that can NOT change (constant) ----
const playerName = "Ana";   // this box is locked 🔒
console.log("Player:", playerName);

// Trying to change a const causes an error.
// Uncomment the next line and run the file to see it:
// playerName = "Bob";   // ❌ TypeError: Assignment to constant variable

// ------------------------------------------------------------
// DATA TYPES — every value has a type.
// typeof tells you which one.
// ------------------------------------------------------------
console.log(typeof "hello");    // string  → text in quotes
console.log(typeof 42);         // number  → any number (including 3.14)
console.log(typeof true);       // boolean → true or false
console.log(typeof undefined);  // undefined → no value set yet

// A variable that is declared but not given a value is "undefined":
let notSetYet;
console.log(notSetYet);         // undefined

// ---- Combining strings with variables ----
// METHOD 1: string concatenation with +
const greeting1 = "Hello, " + playerName + "! Your score is " + score;
console.log(greeting1);

// METHOD 2: template literal (backticks ` ... ${} ... `)
// The ${...} part inserts the variable's value into the text.
const greeting2 = `Hello, ${playerName}! Your score is ${score}`;
console.log(greeting2);

// ---- TRY THIS ----
// 1. Create a const called city with your city name. Print it.
// 2. Create let coins = 100. Add 50. Print the result.
// 3. Print typeof for your new variables.
