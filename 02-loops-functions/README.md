# Lesson 2 — Loops and Functions

**Goal:** repeat code with loops and package logic into reusable functions.
**Time:** ~60–90 minutes.
**Run files with:** `node examples/01-loops.js` (from this lesson folder)

---

## 1. Loops — doing things more than once

### `for` loop — when you know how many times

```js
//     start   condition   step
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

- `let i = 1` runs **once** at the start
- `i <= 5` is checked **before every round** — loop stops when it's false
- `i++` runs **after every round** (`i++` means `i = i + 1`)

This loop runs 5 times with `i` = 1, 2, 3, 4, 5.

### `while` loop — when you don't know how many times

```js
let battery = 3;

while (battery > 0) {
  console.log(`Battery: ${battery}%`);
  battery--; // ⚠️ forget this and the loop NEVER ends
}
```

### Looping over a list with `for...of`

```js
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### `break` and `continue`

- `break` → leave the loop immediately
- `continue` → skip the rest of this round, jump to the next one

---

## 2. Functions — reusable blocks of code

```js
// function declaration
function greet(name) {   // "name" is a PARAMETER (placeholder)
  console.log(`Hello, ${name}!`);
}

greet("Ana");            // "Ana" is an ARGUMENT (actual value)
```

### `return` — sending a value back

```js
function add(a, b) {
  return a + b;          // the function's RESULT
}

const sum = add(3, 4);   // 7
```

- `return` immediately stops the function and hands the value back.
- A function with no `return` gives back `undefined`.

### Parameters vs arguments

| Term | Meaning | Example |
|------|---------|---------|
| **parameter** | placeholder name in the definition | `function add(a, b)` → `a` and `b` |
| **argument** | actual value you pass in | `add(3, 4)` → `3` and `4` |

### Arrow functions — shorter syntax

```js
const add = (a, b) => a + b;   // same as the add() above

const double = (n) => n * 2;   // one parameter: parentheses optional
```

If the body is one expression, the value is returned automatically.

### Why functions matter

```js
// Without functions — repetitive and error-prone
console.log((0 * 9) / 5 + 32);
console.log((20 * 9) / 5 + 32);
console.log((37 * 9) / 5 + 32);

// With a function — write once, use many times
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(37));
```

---

## 📂 Run the examples

```bash
node examples/01-loops.js
node examples/02-functions.js
```

---

## ✏️ Exercises

### Exercise A — FizzBuzz (`exercises/fizzbuzz.js`)

Print numbers 1–20, but:

| Condition | Print |
|-----------|-------|
| divisible by 3 **and** 5 | `FizzBuzz` |
| divisible by 3 | `Fizz` |
| divisible by 5 | `Buzz` |
| otherwise | the number |

Use `%` (remainder): `12 % 3 === 0` means 3 divides 12 evenly.

> ⚠️ Check the "both" case **first**, or 15 will print `Fizz` and never reach `FizzBuzz`.

### Exercise B — Temperature converter (`exercises/temperature.js`)

1. Write `celsiusToFahrenheit(celsius)` that **returns** the converted value.
2. Print a table for `[0, 20, 37, 100]` using `for...of`.
3. Bonus: write `fahrenheitToCelsius(f)` too.

Formula: `F = C × 9 / 5 + 32`

Try them yourself, then compare with `solutions/`.

**Challenge:** write `countVowels(text)` that returns how many vowels are in a string. Hint: loop over `text` with `for...of` and check `"aeiou".includes(char)`.

---

## 🧠 Quiz

1. How many times does `for (let i = 1; i <= 4; i++)` run?
2. What is the difference between a parameter and an argument?
3. What does a function return if it has no `return` statement?
4. What's the difference between `break` and `continue`?
5. Write an arrow function `square(n)` that returns `n * n`.

<details>
<summary>Show answers</summary>

1. **4 times** — `i` = 1, 2, 3, 4.
2. A **parameter** is the placeholder in the function definition; an **argument** is the actual value passed when calling it.
3. `undefined`.
4. `break` exits the loop entirely; `continue` skips to the next iteration.
5. `const square = (n) => n * n;`

</details>

---

## ✅ Checklist

- [ ] I ran both example files
- [ ] I finished FizzBuzz without looking at the solution
- [ ] I finished the temperature converter
- [ ] I can explain what `return` does
- [ ] I tried the vowel-counting challenge

**Next:** Lesson 3 — arrays and objects →
