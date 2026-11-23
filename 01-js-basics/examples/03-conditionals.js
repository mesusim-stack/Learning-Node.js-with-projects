// ============================================================
// LESSON 1 · FILE 3 — conditionals.js
// Run with:  node examples/03-conditionals.js
//
// Computers make decisions with if / else if / else.
// ============================================================

// ---- Comparison operators (they return true or false) ----
//   ===   equal to            (ALWAYS use === not ==)
//   !==   not equal to
//   >     greater than
//   <     less than
//   >=    greater than or equal to
//   <=    less than or equal to

console.log(10 > 5);          // true
console.log(10 === "10");     // false → === also checks the type! (number vs string)
console.log(10 == "10");      // true  → == is loose and can surprise you. Avoid it.

// ---- if / else if / else ----
const temperature = 22;

if (temperature > 30) {
  console.log("It's hot! 🥵");
} else if (temperature > 15) {
  console.log("Nice weather 🙂");
} else {
  console.log("It's cold! 🥶");
}

// Only ONE branch runs — the first one whose condition is true.

// ---- Logical operators: combine conditions ----
//   &&  means "AND"  → both sides must be true
//   ||  means "OR"   → at least one side must be true
//   !   means "NOT"  → flips true/false

const age = 20;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("Welcome to the show! 🎟️");
} else {
  console.log("Sorry, you can't enter.");
}

// ---- A common pattern: the "guard clause" ----
// Check for a problem early and handle it. This keeps the main logic flat.
const username = "";

if (username === "") {
  console.log("Error: username is required.");
} else {
  console.log(`Welcome, ${username}!`);
}

// ---- TRY THIS ----
// 1. Change temperature to 35. What prints?
// 2. Change age to 16. What prints?
// 3. Add a check: is the number 7 between 1 and 10 (inclusive)?
//    Hint: n >= 1 && n <= 10
