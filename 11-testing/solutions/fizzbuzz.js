// ============================================================
// LESSON 11 · SOLUTION — fizzbuzz.js
// ============================================================

function fizzbuzz(n) {
  // Check "both" first — the order matters (see Lesson 2).
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }

  // String(n) converts the number to text, matching the contract.
  return String(n);
}

module.exports = { fizzbuzz };
