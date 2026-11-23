// ============================================================
// LESSON 3 · FILE 2 — objects.js
// Run with:  node examples/02-objects.js
//
// An OBJECT groups related values using named keys.
// Think: "one thing with several properties".
// ============================================================

const person = {
  name: "Ana",         // key: name,  value: "Ana"
  age: 21,             // key: age,   value: 21
  isStudent: true,
  hobbies: ["reading", "gaming"],   // values can be arrays
};

// ---- Reading properties (dot notation) ----
console.log(person.name);        // Ana
console.log(person.age);         // 21
console.log(person.hobbies[0]);  // reading

// ---- Bracket notation (useful when the key is in a variable) ----
const key = "age";
console.log(person[key]);        // 21

// ---- Changing and adding properties ----
person.age = 22;                 // change
person.city = "Manila";          // add (new key)
console.log(person);

// ---- An array OF objects (very common in real code) ----
const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false },
];

// Loop over objects and read their properties.
for (const product of products) {
  // (condition ? a : b) is the "ternary operator" — a one-line if/else.
  const stockLabel = product.inStock ? "In stock ✅" : "Out of stock ❌";
  console.log(`${product.name} — ₱${product.price} — ${stockLabel}`);
}

// ---- TRY THIS ----
// 1. Add a `weight` property to each product and print it.
// 2. Create an object describing yourself: name, age, course.
// 3. Print "My name is ___ and I am ___ years old." using its properties.
