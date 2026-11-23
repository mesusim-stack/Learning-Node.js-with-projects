// ============================================================
// LESSON 11 · SOLUTION — fizzbuzz.test.js
// Run with:  npm test -- solutions
// ============================================================

const { fizzbuzz } = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("returns the number as a string for normal numbers", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("returns Fizz for multiples of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  it("returns Buzz for multiples of 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(20)).toBe("Buzz");
  });

  it("returns FizzBuzz for multiples of both 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  it("returns the number as a string otherwise", () => {
    expect(fizzbuzz(7)).toBe("7");
    expect(fizzbuzz(98)).toBe("98");
  });
});
