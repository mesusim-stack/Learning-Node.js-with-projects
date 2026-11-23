# Lesson 7 — Asynchronous JavaScript

**Goal:** understand why async exists, and how callbacks → Promises → `async/await` build on each other.
**Time:** ~90 minutes.

---

## 1. Synchronous vs asynchronous

**Synchronous** code runs top to bottom — each line waits for the previous one.

```js
console.log("one");
console.log("two");
```

**Asynchronous** code is scheduled for later. The program keeps moving instead of waiting.

```js
console.log("one");

setTimeout(() => {
  console.log("two — after 1 second");
}, 1000);

console.log("three");
```

Output order: `one`, `three`, `two`.

Why? `setTimeout` hands the callback to Node and moves on. After 1000 ms, Node runs the callback. This matters because **slow things** (disk, network, database) must not freeze your whole program.

> 🧠 Node's "event loop" is the machinery that decides when deferred callbacks run. You don't need to master it now — just remember: **async code finishes later, not immediately.**

---

## 2. Callbacks

A **callback** is a function passed to another function, to be called when the work is done.

```js
function fetchUser(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Ana" });
  }, 500);
}

fetchUser(1, (user) => {
  console.log("Got user:", user.name);
});
```

### Callback hell

When each step depends on the previous one, callbacks nest:

```js
fetchUser(1, (u1) => {
  fetchUser(2, (u2) => {
    fetchUser(3, (u3) => {
      console.log(u1, u2, u3); // 😵 hard to read, hard to handle errors
    });
  });
});
```

Promises were invented to fix this.

---

## 3. Promises

A **Promise** represents a value that will exist later. It is in one of three states:

| State | Meaning |
|-------|---------|
| **pending** | still working |
| **fulfilled** | success — has a value |
| **rejected** | failed — has an error |

Creating one:

```js
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`waited ${ms}ms`), ms);
  });
}
```

- Call `resolve(value)` when it works.
- Call `reject(error)` when it fails.

Using one:

```js
delay(500)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
```

- `.then()` runs on success
- `.catch()` runs on **any** failure in the chain
- Returning a promise inside `.then()` lets you **chain** steps flat instead of nesting.

---

## 4. `async` / `await` — promises that read like sync code

Same promise, nicer syntax:

```js
async function main() {
  const message = await delay(500); // pauses THIS function, not the program
  console.log(message);
}

main();
```

Rules:

- `async` before a function makes it **return a promise**.
- `await` pauses the function until the promise settles, then gives you the value.
- `throw` inside an `async` function = a rejected promise.

### Error handling: `try / catch`

```js
async function main() {
  try {
    const value = await riskyThing();
    console.log(value);
  } catch (error) {
    console.error("Something failed:", error.message);
  }
}
```

This is the standard pattern. **Always** wrap `await` calls that can fail.

---

## 5. Async file I/O

`fs` has promise-based versions:

```js
const fs = require("fs/promises");

const text = await fs.readFile("file.txt", "utf8");
await fs.writeFile("file.txt", "new content");
```

No callbacks, no `...Sync`. Just `await`.

### Parallel work with `Promise.all`

```js
const [a, b] = await Promise.all([
  fs.readFile("a.txt", "utf8"),
  fs.readFile("b.txt", "utf8"),
]);
```

Both files are read **at the same time**. If either fails, the whole `Promise.all` rejects.

---

## 📂 Run the examples

```bash
node examples/01-callbacks.js
node examples/02-promises.js
node examples/03-async-await.js
```

Notice the **order** of output — that's the whole point.

---

## ✏️ Exercise — Async file reader (`exercises/async-files.js`)

Given `data/a.txt` and `data/b.txt`:

1. Write an `async` function that reads both files **one after the other** with `await`, then prints them.
2. Wrap the reads in `try/catch` so a missing file gives a friendly error.
3. **Bonus:** read both files **in parallel** with `Promise.all` and time it using `console.time("label")` / `console.timeEnd("label")`.

> 💡 With tiny local files, sequential and parallel take about the same time. The difference shows up with network calls, databases, or big files. The *pattern* is what you're learning.

Compare with `solutions/async-files.js` after trying.

**Challenge:** read a file that doesn't exist (e.g., `data/missing.txt`) and confirm your `catch` block handles it without crashing.

---

## 🧠 Quiz

1. What order does this print: `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");`?
2. What are the three promise states?
3. What does `await` actually do?
4. Which is easier to read — nested callbacks or `async/await`? Why?
5. How do you run two async operations in parallel?

<details>
<summary>Show answers</summary>

1. `A`, `C`, `B` — the timeout runs after the current code.
2. Pending, fulfilled (resolved), rejected.
3. Pauses the current `async` function until the promise settles, then returns its value (or throws its error).
4. `async/await` — it reads top-to-bottom like synchronous code, and `try/catch` handles errors in one place.
5. `Promise.all([promise1, promise2])` and `await` the result.

</details>

---

## ✅ Checklist

- [ ] I ran all three examples and noticed the output order
- [ ] I understand `.then()` / `.catch()`
- [ ] I can explain what `await` pauses (the function — not the whole program)
- [ ] I completed the async file reader with `try/catch`
- [ ] I tried the `Promise.all` bonus
- [ ] I tried the missing-file challenge

**Next:** Lesson 8 — your first HTTP server →
