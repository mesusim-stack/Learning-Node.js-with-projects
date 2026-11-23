# Lesson 1 — JavaScript Basics I

**Goal:** understand variables, data types, and decisions (`if/else`).
**Time:** ~60–90 minutes.
**Run files with:** `node examples/01-hello.js` (from this lesson folder)

---

## 1. What is JavaScript?

JavaScript (JS) is a language that tells the computer what to do, step by step: store a value, do math, make a decision, repeat something.

A JS file is just a **plain text file** with the extension `.js`.

---

## 2. Your first line of code: `console.log`

`console.log(...)` prints something to the terminal.

```js
console.log("Hello, world!");
```

- The text inside `"double quotes"` is called a **string**.
- **Comments** start with `//`. Node ignores them — they're notes for humans.

```js
// This is a comment. It does nothing.
console.log("This runs."); // comments can also go at the end of a line
```

---

## 3. Variables — named boxes for values

```js
let score = 0;          // can be changed later
score = 10;             // ✅ works

const name = "Ana";     // cannot be changed
name = "Bob";           // ❌ TypeError: Assignment to constant variable
```

**Rule of thumb:**
- Use `const` by default.
- Use `let` only when the value must change.
- Never use `var` (old syntax, has confusing behavior).

Variable names: use `camelCase` — `playerScore`, `favoriteColor`. They can't start with a number and can't contain spaces.

---

## 4. Data types

| Type | Examples | Meaning |
|------|----------|---------|
| **string** | `"hello"`, `'hi'`, `` `yo` `` | text |
| **number** | `42`, `3.14`, `-7` | any number (no separate int/float) |
| **boolean** | `true`, `false` | yes/no |
| **undefined** | `undefined` | declared but no value yet |
| **null** | `null` | deliberately empty |

`typeof value` tells you the type:

```js
console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
```

> 🧠 Fun fact: `typeof null` returns `"object"` — an old JavaScript bug kept for compatibility. Don't worry about it.

---

## 5. Operators

**Math:** `+` `-` `*` `/` `%` (remainder) and `**` (power)

```js
console.log(10 % 3); // 1 — the remainder of 10 ÷ 3
console.log(2 ** 3); // 8 — 2 to the power of 3
```

**Comparison** (returns `true` or `false`):

| Operator | Meaning |
|----------|---------|
| `===` | equal to (value **and** type) — **always use this** |
| `!==` | not equal to |
| `>` `<` `>=` `<=` | greater / less than |

```js
console.log(10 === "10"); // false — number vs string!
console.log(10 == "10");  // true — == converts types. Avoid it.
```

**Logic:** `&&` (and), `||` (or), `!` (not)

---

## 6. Decisions with `if / else if / else`

```js
const temperature = 22;

if (temperature > 30) {
  console.log("It's hot! 🥵");
} else if (temperature > 15) {
  console.log("Nice weather 🙂");
} else {
  console.log("It's cold! 🥶");
}
```

Only **one** branch runs — the first condition that is `true`. If nothing matches and there's an `else`, the `else` runs.

**Guard clause pattern** — check for problems early:

```js
if (username === "") {
  console.log("Error: username is required.");
  // stop here
} else {
  // continue with the good case
}
```

---

## 7. Template literals (backticks)

```js
const name = "Ana";
const score = 95;

console.log("Hello, " + name + "! Score: " + score); // old way
console.log(`Hello, ${name}! Score: ${score}`);      // modern way ✅
```

Backticks `` ` `` let you drop variables into text with `${...}`. You'll use this constantly.

---

## 📂 Run the examples

```bash
node examples/01-hello.js
node examples/02-variables.js
node examples/03-conditionals.js
```

Read the comments in each file — they explain **why**, not just what.

---

## ✏️ Exercise — Number Guessing Game (one shot)

Open `exercises/guess-game.js` and follow the TODOs.

The secret number is `7`. Set a guess, then use `if / else if / else` to print:
- `"Too low!"` if the guess is below the secret
- `"Too high!"` if it's above
- `"You got it! 🎉"` if it matches

Change the guess and run the file several times: try `5`, `7`, and `10`.

Then compare with `solutions/guess-game.js` (**only after trying!**).

**Challenge:** if the guess is within 2 of the secret, print `"So close!"` instead (hint: use `Math.abs(guess - secret) <= 2`).

---

## 🧠 Quiz

1. What is the difference between `let` and `const`?
2. What does `console.log(2 + 3 * 4)` print?
3. What type is `"42"`?
4. What does `===` check that `==` does not?
5. Why does this fail? `const age = 15; age = 16;`

<details>
<summary>Show answers</summary>

1. `let` can be reassigned later; `const` cannot.
2. `14` — multiplication happens before addition.
3. A **string** (it's in quotes). `42` without quotes is a number.
4. `===` checks both the **value** and the **type**; `==` converts types first.
5. You cannot reassign a `const`. Use `let` if the value must change.

</details>

---

## ✅ Checklist

- [ ] I ran all three example files
- [ ] I read the comments in the examples
- [ ] I finished the guessing game without looking at the solution first
- [ ] I tried the challenge
- [ ] I can explain `let` vs `const` in my own words

**Next:** Lesson 2 — loops and functions →
