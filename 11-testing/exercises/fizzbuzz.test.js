// ============================================================
// LESSON 11 · EXERCISE — fizzbuzz.test.js
// Run with:  npm test -- exercises
// ============================================================

const { fizzbuzz } = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("returns the number as a string for normal numbers", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  // TODO 1 — test that 3 returns "Fizz"

  // TODO 2 — test that 5 returns "Buzz"

  // TODO 3 — test that 15 returns "FizzBuzz"

  // TODO 4 — test one more normal number, e.g. 7 → "7"
});
