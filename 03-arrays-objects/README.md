# Lesson 3 — Arrays, Objects & Array Methods

**Goal:** store lists and structured data, and use the array methods you'll see in every real Node project.
**Time:** ~90 minutes.
**Run files with:** `node examples/01-arrays.js` (from this lesson folder)

---

## 1. Arrays — ordered lists

```js
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);        // "apple"   ← indexes start at 0!
console.log(fruits.length);    // 3
console.log(fruits[3]);        // undefined ← no fourth item
```

| Operation | Code |
|-----------|------|
| add to end | `fruits.push("mango")` |
| remove from end | `fruits.pop()` |
| add to start | `fruits.unshift("kiwi")` |
| remove from start | `fruits.shift()` |
| loop over items | `for (const f of fruits) { ... }` |

---

## 2. Objects — named properties

An object groups related values under **keys**:

```js
const person = {
  name: "Ana",
  age: 21,
  isStudent: true,
  hobbies: ["reading", "gaming"],
};

console.log(person.name);       // Ana       ← dot notation
console.log(person.hobbies[0]); // reading

person.age = 22;                // change a value
person.city = "Manila";         // add a new key
```

Bracket notation is useful when the key lives in a variable:

```js
const key = "age";
console.log(person[key]); // 21
```

### Arrays of objects — the most common data shape in the world

```js
const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
];

for (const product of products) {
  console.log(`${product.name} costs ${product.price}`);
}
```

### The ternary operator — a one-line if/else

```js
const label = product.inStock ? "In stock ✅" : "Out of stock ❌";
```

---

## 3. Array methods (the important part)

All of these take a **callback function** — a function that runs once per item.

### `forEach` — do something with each item

```js
scores.forEach((score) => console.log("Score:", score));
```

Returns nothing. Use it for printing or side effects.

### `map` — transform each item → new array (same length)

```js
const doubled = scores.map((score) => score * 2);
// [45, 82, 91] → [90, 164, 182]
```

### `filter` — keep items that pass a test → new, shorter array

```js
const passing = scores.filter((score) => score >= 75);
```

### `find` — the first item that passes a test (or `undefined`)

```js
const perfect = scores.find((score) => score === 100);
```

### `reduce` — boil the array down to one value

```js
const total = scores.reduce((sum, score) => sum + score, 0);
```

- `sum` is the **accumulator** — the running result
- `score` is the current item
- `0` is the **starting value** of the accumulator

### Chaining

Because `filter` and `map` return new arrays, you can chain them:

```js
const passingNames = students
  .filter((s) => s.grade >= 75)
  .map((s) => s.name);
```

### Handy string methods

```js
"  Hello Node  ".trim()            // "Hello Node"
"hello".toUpperCase()              // "HELLO"
"javascript".includes("script")    // true
"a,b,c".split(",")                 // ["a", "b", "c"]
["a", "b"].join(" and ")           // "a and b"
```

---

## 📂 Run the examples

```bash
node examples/01-arrays.js
node examples/02-objects.js
node examples/03-array-methods.js
```

---

## ✏️ Exercise — Gradebook (`exercises/gradebook.js`)

Given this data:

```js
const students = [
  { name: "Ana", grade: 88 },
  { name: "Ben", grade: 72 },
  { name: "Carla", grade: 95 },
  { name: "Dan", grade: 61 },
  { name: "Eve", grade: 79 },
];
```

1. Print every student: `Ana scored 88`
2. Print the class average (1 decimal place)
3. Print the names of students who passed (`grade >= 75`)
4. Print the name of the student with the **highest** grade

Compare with `solutions/gradebook.js` after trying.

**Challenge:** print a letter grade for each student: 90+ = A, 80–89 = B, 75–79 = C, below 75 = F.

---

## 🧠 Quiz

1. What index is the **last** item of an array with 4 items?
2. Which method would you use to turn `[1, 2, 3]` into `[2, 4, 6]`?
3. Which method would you use to keep only even numbers?
4. What does `reduce` need besides the callback?
5. How do you read the `price` property of `product`?

<details>
<summary>Show answers</summary>

1. **3** — indexes start at 0, so 4 items occupy 0–3.
2. `map` — `arr.map((n) => n * 2)`
3. `filter` — `arr.filter((n) => n % 2 === 0)`
4. A **starting value** for the accumulator (e.g., `0` when summing).
5. `product.price`

</details>

---

## ✅ Checklist

- [ ] I ran all three example files
- [ ] I finished the gradebook exercise
- [ ] I can explain `map` vs `filter` vs `find`
- [ ] I understand 0-based indexing
- [ ] I tried the letter-grade challenge

**Next:** Lesson 4 — running JavaScript with Node →
