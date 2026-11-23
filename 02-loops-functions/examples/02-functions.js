// ============================================================
// LESSON 2 · FILE 2 — functions.js
// Run with:  node examples/02-functions.js
//
// A function is a reusable block of code with a name.
// Write it once, use it many times.
// ============================================================

// ---- Declaring a function ----
// "greet" is the name. "name" is a PARAMETER (a placeholder for a value).
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// ---- Calling a function ----
// "Ana" is an ARGUMENT (the actual value we pass in).
greet("Ana");
greet("Bob");
greet("Haacha");

// ---- return: giving a value BACK to whoever called the function ----
function add(a, b) {
  return a + b; // send the result back
}

const sum = add(3, 4); // the returned value lands in `sum`
console.log("3 + 4 =", sum);
console.log("10 + 20 =", add(10, 20)); // you can use it directly too

// A function WITHOUT return gives back undefined:
function sayBye() {
  console.log("Bye!");
}
const result = sayBye();
console.log("sayBye returned:", result); // undefined

// ---- A more useful example ----
function isAdult(age) {
  return age >= 18; // returns true or false
}

console.log("Age 20 is adult?", isAdult(20)); // true
console.log("Age 12 is adult?", isAdult(12)); // false

if (isAdult(20)) {
  console.log("You may enter.");
}

// ---- Arrow functions (a shorter syntax, same idea) ----
// This does exactly the same as `add` above.
const addArrow = (a, b) => a + b;
console.log("Arrow add:", addArrow(5, 6)); // 11

// ---- TRY THIS ----
// 1. Write a function multiply(a, b) that returns a * b.
// 2. Write a function shout(text) that returns text.toUpperCase() + "!".
// 3. Call shout("hello") and print the result.
