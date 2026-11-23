// ============================================================
// LESSON 5 · SOLUTION — operations.js
// ============================================================

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// multiply — same pattern as the others.
function multiply(a, b) {
  return a * b;
}

// divide — guard against dividing by zero.
function divide(a, b) {
  if (b === 0) {
    // Returning a message (a string) instead of a number is a simple way
    // to signal a problem to the caller. In Lesson 7 we'll learn a better
    // approach: throwing errors and catching them with try/catch.
    return "Cannot divide by zero";
  }
  return a / b;
}

// Export everything the rest of the app needs.
module.exports = { add, subtract, multiply, divide };
