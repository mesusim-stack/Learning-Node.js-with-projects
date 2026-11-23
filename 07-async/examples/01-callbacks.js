// ============================================================
// LESSON 7 · FILE 1 — callbacks.js
// Run with:  node examples/01-callbacks.js
// ============================================================

// Synchronous code runs top to bottom, one line at a time.
console.log("1 — first");

// setTimeout schedules code to run LATER. It does NOT block the program.
setTimeout(() => {
  console.log("2 — after 1 second");
}, 1000);

console.log("3 — last (but printed before the timeout!)");

// The output order is: 1, 3, 2.
// Why? setTimeout hands the callback to Node, which comes back to it AFTER
// the current code finishes. That "come back later" is asynchronous.

// ---- A callback is just a function passed to another function ----
function fetchUser(id, callback) {
  // Pretend this takes time (like a database or network call).
  setTimeout(() => {
    const user = { id, name: "Ana" };
    callback(user); // call the callback with the result
  }, 500);
}

fetchUser(1, (user) => {
  console.log("Got user:", user.name);
});

// ---- The problem: callbacks that depend on each other get nested ----
// This is called "callback hell" — hard to read, hard to handle errors.
fetchUser(1, (user1) => {
  fetchUser(2, (user2) => {
    fetchUser(3, (user3) => {
      console.log("Nested:", user1.name, user2.name, user3.name);
    });
  });
});

// ---- TRY THIS ----
// 1. Change the timeout to 3000 and re-run. Everything else still prints first.
// 2. Add a fourth nested fetchUser. Feel the pain — this is why promises exist.
