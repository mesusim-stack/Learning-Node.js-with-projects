// ============================================================
// LESSON 7 · FILE 3 — async-await.js
// Run with:  node examples/03-async-await.js
//
// async/await is "syntactic sugar" over promises.
// It lets us write asynchronous code that READS like sync code.
// ============================================================

function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

// ---- async makes a function return a promise ----
async function main() {
  console.log("Starting...");

  // ---- await pauses THIS function until the promise settles ----
  // (The rest of the program is not blocked — only this function waits.)
  await delay(1000);
  console.log("1 second passed");

  await delay(500);
  console.log("0.5 more seconds passed");
}

main();

// ---- Handling errors with try / catch ----
async function readNumber(text) {
  const number = Number(text);

  if (Number.isNaN(number)) {
    // throw inside an async function = return a REJECTED promise
    throw new Error(`"${text}" is not a number`);
  }

  return number;
}

async function demo() {
  try {
    const n = await readNumber("42");
    console.log("Parsed:", n);

    const bad = await readNumber("hello"); // this throws...
    console.log("Never reached:", bad);    // ...so this never runs
  } catch (error) {
    // ...and is caught here.
    console.error("Caught:", error.message);
  }
}

demo();

// ---- TRY THIS ----
// 1. Change readNumber("42") to readNumber("abc"). What happens?
// 2. Remove the try/catch. What error appears?
// 3. Add a third delay(2000) at the end of main().
