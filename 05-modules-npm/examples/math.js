// ============================================================
// LESSON 5 · FILE 1 — math.js
// This is a MODULE: a file that shares code with other files.
// ============================================================

// These functions are "private" to this file until we export them.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const PI = 3.14159;

// module.exports is the "public interface" of this file.
// Whatever we attach here can be used by other files.
//
// Shortcut syntax: { add } means { add: add }.
module.exports = { add, subtract, PI };
