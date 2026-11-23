// ============================================================
// LESSON 4 · FILE 2 — argv.js
// Run with:  node examples/02-argv.js 5 7
// (or any two numbers you like)
// ============================================================

// process.argv is an array of everything typed on the command line.
//   [0] the path to node.exe
//   [1] the path to this file
//   [2] the first word YOU typed
//   [3] the second word YOU typed
console.log("Full argv:", process.argv);

// We only care about what the user typed, so we slice off the first two.
const userArgs = process.argv.slice(2);
console.log("User arguments:", userArgs);

// Everything from the command line is a STRING.
// Number(...) converts text to a number; Number("hello") gives NaN.
const first = Number(userArgs[0]);
const second = Number(userArgs[1]);

// Number.isNaN(x) is true when x is "Not a Number".
if (Number.isNaN(first) || Number.isNaN(second)) {
  // Usage message + exit code 1 = "this program failed".
  console.error("Please give me two numbers. Example:");
  console.error("  node examples/02-argv.js 5 7");
  process.exit(1);
}

console.log(`${first} + ${second} = ${first + second}`);

// ---- TRY THIS ----
// 1. Run with no arguments. What happens?
// 2. Run with words instead of numbers: node examples/02-argv.js hello world
// 3. Change the math to multiply instead of add.
