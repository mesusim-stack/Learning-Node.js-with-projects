// ============================================================
// LESSON 3 · FILE 1 — arrays.js
// Run with:  node examples/01-arrays.js
//
// An array is an ordered list of values.
// ============================================================

const fruits = ["apple", "banana", "cherry"];

// Positions (INDEXES) start at 0, not 1!
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log(fruits[3]); // undefined — there is no index 3

// .length tells you how many items there are.
console.log("How many fruits?", fruits.length); // 3

// ---- Changing the list ----
fruits.push("mango");        // add to the END
console.log(fruits);         // [ 'apple', 'banana', 'cherry', 'mango' ]

fruits.pop();                // remove the LAST item
console.log(fruits);

fruits.unshift("kiwi");      // add to the START
console.log(fruits);

// ---- Looping over an array ----
for (const fruit of fruits) {
  console.log("I like", fruit);
}

// ---- A classic pattern: total of numbers ----
const prices = [10, 25, 7.5];
let total = 0;

for (const price of prices) {
  total = total + price; // add each price to the running total
}
console.log("Total price: $", total);

// ---- Reading the last item without knowing the length ----
console.log("Last price:", prices[prices.length - 1]);

// ---- TRY THIS ----
// 1. Make an array of your 3 favorite movies and print each one.
// 2. Print the last fruit using fruits[fruits.length - 1].
// 3. Start total at 100 instead of 0. What's the total now?
