// ============================================================
// LESSON 7 · FILE 2 — promises.js
// Run with:  node examples/02-promises.js
//
// A Promise represents a value that will exist LATER.
// ============================================================

// new Promise takes a function with (resolve, reject).
// - call resolve(value) when the work succeeds
// - call reject(error) when it fails
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`waited ${ms}ms`), ms);
  });
}

// .then() runs when the promise resolves.
delay(500)
  .then((message) => {
    console.log(message);
    return delay(300); // returning a promise lets us CHAIN
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    // .catch() runs if ANY promise in the chain rejects.
    console.error("Something failed:", error);
  });

// ---- A promise that can fail ----
function riskyDivide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Cannot divide by zero"));
    } else {
      resolve(a / b);
    }
  });
}

riskyDivide(10, 2)
  .then((result) => console.log("10 / 2 =", result))
  .catch((error) => console.error("Error:", error.message));

riskyDivide(10, 0)
  .then((result) => console.log("10 / 0 =", result)) // skipped
  .catch((error) => console.error("Error:", error.message)); // this runs

// ---- TRY THIS ----
// 1. Add another .then() to the delay chain.
// 2. Make riskyDivide reject for negative numbers too.
// 3. Remove the .catch() from the 10 / 0 call and run.
//    (You'll see an "UnhandledPromiseRejection" warning.)
