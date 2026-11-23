// ============================================================
// LESSON 6 · FILE 2 — write-file.js
// Run with:  node examples/02-write-file.js
// ============================================================

const fs = require("fs");
const path = require("path");

// Output folder for this example.
const outputDir = path.join(__dirname, "output");
const outputFile = path.join(outputDir, "hello.txt");

// Create the folder if it doesn't exist yet.
// recursive: true → create parents too, and don't crash if it already exists.
fs.mkdirSync(outputDir, { recursive: true });

// Write text to the file. If the file exists, it is REPLACED.
fs.writeFileSync(
  outputFile,
  "Hello from Node!\nThis file was written by code.\n"
);

console.log("Wrote:", outputFile);

// Append adds to the END instead of replacing.
fs.appendFileSync(outputFile, "This line was appended later.\n");

// Read it back to prove it worked.
console.log("---- file contents ----");
console.log(fs.readFileSync(outputFile, "utf8"));

// ---- TRY THIS ----
// 1. Run the script twice. Does the file grow? (It shouldn't — write replaces,
//    append adds, and the file is written from scratch each run.)
// 2. Change the text that gets written.
// 3. Delete the output folder and run again — it gets recreated.
