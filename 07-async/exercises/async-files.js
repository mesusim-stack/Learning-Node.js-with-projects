// ============================================================
// LESSON 7 · EXERCISE — Async file reader
// Run with:  node exercises/async-files.js
//
// TODO 1 — require fs/promises and path
// TODO 2 — write an async function that reads data/a.txt and data/b.txt
//          ONE AFTER THE OTHER (await each), then prints both
// TODO 3 — wrap the reads in try/catch so a missing file gives a friendly error
// TODO 4 — call the function
// BONUS  — read both files IN PARALLEL with Promise.all and time it.
//          Hint: console.time("label") ... console.timeEnd("label")
// ============================================================

// Hint for paths:
//   const DATA_DIR = path.join(__dirname, "data");
//   const fileA = path.join(DATA_DIR, "a.txt");
