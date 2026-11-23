// ============================================================
// LESSON 11 · EXAMPLE — sum.test.js
// Run with:  npm test
//
// Jest automatically finds files that:
//   - end with .test.js
//   - OR live inside a __tests__ folder
// ============================================================

const { add } = require("./sum");

// describe groups related tests together.
describe("add", () => {
  // it (or test) defines one test case.
  // "arrange → act → assert" is the pattern:
  it("adds two positive numbers", () => {
    // act + assert (the call happens inside expect here)
    expect(add(2, 3)).toBe(5);
  });

  it("works with negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds zero correctly", () => {
    expect(add(7, 0)).toBe(7);
  });
});
