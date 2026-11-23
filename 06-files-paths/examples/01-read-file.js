// ============================================================
// LESSON 6 · FILE 1 — read-file.js
// Run with:  node examples/01-read-file.js
// ============================================================

const fs = require("fs");
const path = require("path");

// Build an ABSOLUTE path so it works no matter where you run node from.
// __dirname = folder of this file. path.join adds the right separators.
const filePath = path.join(__dirname, "data", "sample.txt");

// readFileSync blocks until it finishes — fine for small scripts.
// "utf8" means "give me text", not raw bytes.
const content = fs.readFileSync(filePath, "utf8");

console.log("File contents:");
console.log(content);

// path is also great for inspecting paths:
console.log("Full path:", filePath);
console.log("File name:", path.basename(filePath)); // sample.txt
console.log("Folder:", path.dirname(filePath));     // ...\examples\data

// ---- TRY THIS ----
// 1. Add a line to data/sample.txt, then run again.
// 2. Change the filename to "nope.txt" and run it.
//    Read the error: the code is ENOENT ("file does not exist").
//    (See the README for how try/catch handles this.)
