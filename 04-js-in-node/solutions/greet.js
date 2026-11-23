// ============================================================
// LESSON 4 · SOLUTION A — Greet CLI
// Run with:  node solutions/greet.js Maria
//            node solutions/greet.js Maria Santos
// ============================================================

// process.argv[2] is the first thing the user typed after the filename.
const name = process.argv[2];

// Guard clause: no name → explain how to use the tool, then stop.
if (!name) {
  console.error("Usage: node greet.js <your name>");
  process.exit(1); // exit code 1 = failure
}

// BONUS — the surname, if provided.
const surname = process.argv[3];

// Build the full name:
// - with a surname: "Maria Santos"
// - without: just "Maria"
// The ternary operator picks based on whether surname exists.
const fullName = surname ? `${name} ${surname}` : name;

console.log(`Hello, ${fullName}! Welcome to Node.js.`);
