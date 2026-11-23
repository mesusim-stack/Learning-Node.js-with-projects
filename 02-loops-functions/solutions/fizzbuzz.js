// ============================================================
// LESSON 2 · SOLUTION — FizzBuzz
// Run with:  node solutions/fizzbuzz.js
// ============================================================

// Loop from 1 to 20 (inclusive).
for (let i = 1; i <= 20; i++) {
  // ⚠️ IMPORTANT: check the "both" case FIRST.
  // If we checked 3 first, 15 would print "Fizz" and never reach this check.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
