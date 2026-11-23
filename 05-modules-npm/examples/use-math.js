// ============================================================
// LESSON 5 · FILE 2 — use-math.js
// Run with:  node examples/use-math.js
// ============================================================

// require() loads another file/module and gives us its module.exports.
// './math' means "math.js in THIS folder".
// The ./ is REQUIRED for local files!
const math = require("./math");

// math is the object we exported from math.js.
console.log("2 + 3 =", math.add(2, 3));
console.log("10 - 4 =", math.subtract(10, 4));
console.log("PI =", math.PI);

// You can also "destructure" the exports to grab what you need.
const { add } = require("./math");
console.log("Destructured add:", add(7, 7));

// require('fs') with NO ./ loads a BUILT-IN module (or an installed package).
const fs = require("fs");
console.log("fs module loaded:", typeof fs.readFileSync === "function");

// ---- TRY THIS ----
// 1. Add a multiply() function to math.js, export it, and call it here.
// 2. Change require("./math") to require("math") and run it.
//    Read the error carefully — that's the "no ./" rule in action.
