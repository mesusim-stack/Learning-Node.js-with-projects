// ============================================================
// LESSON 11 · EXAMPLE — sum.js
// A tiny module so we have something to test.
// ============================================================

function add(a, b) {
  return a + b;
}

// Export it so the test file (and any other file) can use it.
module.exports = { add };
