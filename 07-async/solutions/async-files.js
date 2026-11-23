// ============================================================
// LESSON 7 · SOLUTION — Async file reader
// Run with:  node solutions/async-files.js
// ============================================================

// fs/promises gives us promise-based versions of the fs functions.
const fs = require("fs/promises");
const path = require("path");

const DATA_DIR = path.join(__dirname, "data");
const fileA = path.join(DATA_DIR, "a.txt");
const fileB = path.join(DATA_DIR, "b.txt");

// ---- Sequential: wait for A, then read B ----
async function readSequential() {
  try {
    // await pauses this function until each read finishes.
    const a = await fs.readFile(fileA, "utf8");
    const b = await fs.readFile(fileB, "utf8");

    console.log("A:", a.trim());
    console.log("B:", b.trim());
  } catch (error) {
    // Runs if either file is missing or unreadable.
    console.error("Could not read files:", error.message);
  }
}

// ---- Parallel: start both reads at once ----
async function readParallel() {
  try {
    // Promise.all takes an array of promises and resolves when ALL finish.
    // Destructuring: const [a, b] = ... takes the two results in order.
    const [a, b] = await Promise.all([
      fs.readFile(fileA, "utf8"),
      fs.readFile(fileB, "utf8"),
    ]);

    console.log("Parallel A:", a.trim());
    console.log("Parallel B:", b.trim());
  } catch (error) {
    console.error("Could not read files:", error.message);
  }
}

async function main() {
  console.log("--- Sequential ---");
  console.time("sequential");
  await readSequential();
  console.timeEnd("sequential");

  console.log("--- Parallel ---");
  console.time("parallel");
  await readParallel();
  console.timeEnd("parallel");
}

main();

// ⚠️ With tiny local files the timings look the same. Promise.all matters when
// each operation is slow (network, database) — then both run at the same time
// instead of one after the other.
