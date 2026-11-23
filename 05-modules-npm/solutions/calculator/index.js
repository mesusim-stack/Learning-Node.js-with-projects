// ============================================================
// LESSON 5 · SOLUTION — index.js
// Run from this folder with:  npm start
// ============================================================

// Load our own module — ./ means "in this same folder".
const operations = require("./operations");

const a = 5;
const b = 3;

// Template literals keep the output readable.
console.log(`${a} + ${b} = ${operations.add(a, b)}`);
console.log(`${a} - ${b} = ${operations.subtract(a, b)}`);
console.log(`${a} * ${b} = ${operations.multiply(a, b)}`);
console.log(`${a} / ${b} = ${operations.divide(a, b)}`);
console.log(`${a} / 0 = ${operations.divide(a, 0)}`);
