// ============================================================
// LESSON 2 · FILE 1 — loops.js
// Run with:  node examples/01-loops.js
//
// Loops repeat code so you don't have to copy-paste it.
// ============================================================

// ---- for loop: when you know HOW MANY times to repeat ----
// Parts:  for (start ; condition ; step)
for (let i = 1; i <= 5; i++) {
  // i++ means "add 1 to i" (short for i = i + 1)
  console.log("Count:", i);
}
console.log("---"); // just a separator

// ---- counting down ----
for (let i = 3; i >= 1; i--) {
  console.log("Countdown:", i);
}
console.log("Liftoff! 🚀");

// ---- while loop: repeat WHILE a condition is true ----
let battery = 3;
while (battery > 0) {
  console.log(`Battery: ${battery}%`);
  battery--; // IMPORTANT: without this, the loop never ends (infinite loop!)
}
console.log("Battery empty.");

// ---- break: leave a loop early ----
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("Found 4, stopping the loop.");
    break; // jump out of the loop completely
  }
  console.log("i is", i);
}

// ---- continue: skip the rest of THIS round, go to the next ----
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip printing 3
  }
  console.log("Number:", i);
}

// ---- for...of: loop over each item in a list ----
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// ---- TRY THIS ----
// 1. Print only even numbers from 1 to 10. Hint: if (i % 2 === 0)
// 2. Make a countdown from 10 to 1, then print "Happy New Year!".
// 3. Remove `battery--` and run it. Press Ctrl + C to stop the infinite loop.
