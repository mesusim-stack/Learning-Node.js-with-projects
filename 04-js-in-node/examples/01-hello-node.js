// ============================================================
// LESSON 4 · FILE 1 — hello-node.js
// Run with:  node examples/01-hello-node.js
//
// Node gives us some useful globals for free — no imports needed.
// ============================================================

// process is an object describing the running Node program.
console.log("Node version:", process.version);      // e.g. v24.11.1
console.log("Operating system:", process.platform); // e.g. win32
console.log("Current folder:", process.cwd());      // where you ran the command

// __dirname is the folder THIS FILE lives in (CommonJS global).
console.log("File lives in:", __dirname);

// __filename is the full path to THIS file.
console.log("File path:", __filename);

// console.error prints to stderr (standard error) instead of stdout.
// Terminals still show it, but scripts can tell errors apart from normal output.
console.error("This is an error message (stderr).");

// ---- TRY THIS ----
// 1. Run this file from the course root instead of the lesson folder:
//      node "04-js-in-node/examples/01-hello-node.js"
//    Does __dirname change? Does process.cwd()?
// 2. Add a line printing 2 + 2.
