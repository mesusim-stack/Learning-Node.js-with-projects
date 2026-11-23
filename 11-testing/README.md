# Lesson 11 — Testing and Debugging

**Goal:** write automated tests with Jest and learn tools that make development faster.
**Time:** ~60–90 minutes.

---

## 1. Why test?

Tests are code that checks your code. They:

- catch bugs **before** your users do
- let you change code confidently (tests tell you if you broke something)
- document how the code is supposed to behave

A good test has three parts: **arrange** (set up), **act** (run the code), **assert** (check the result).

---

## 2. Jest — the most popular JS test runner

Install it as a **dev dependency** (only needed while developing):

```bash
npm install --save-dev jest
```

Add a script to `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

### Your first test

**`sum.js`**

```js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

**`sum.test.js`**

```js
const { add } = require("./sum");

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

Run it:

```bash
npm test
```

- `describe(...)` groups related tests
- `it(...)` / `test(...)` is a single test case
- `expect(actual).toBe(expected)` is the assertion

### Common matchers

| Matcher | Checks |
|---------|--------|
| `toBe(x)` | exact equality (primitives) |
| `toEqual(x)` | deep equality (objects, arrays) |
| `toBeTruthy()` / `toBeFalsy()` | truthiness |
| `toContain(x)` | array/string contains |
| `toThrow()` | function throws an error |

### Testing async code

```js
test("reads a file", async () => {
  const text = await fs.readFile("file.txt", "utf8");
  expect(text).toContain("hello");
});
```

Just make the test function `async` and `await` inside it.

> 💡 **Test the logic, not the framework.** Functions that take input and return output are the easiest to test. That's one more reason to keep routing thin and put logic in helpers.

---

## 3. Testing an Express API with supertest (bonus)

```bash
npm install --save-dev supertest
```

To test an app, **export it** and start the server in a separate file:

```js
// app.js
module.exports = app;

// server.js
const app = require("./app");
app.listen(3000);
```

Then:

```js
const request = require("supertest");
const app = require("./app");

test("GET /todos returns 200", async () => {
  const res = await request(app).get("/todos");
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
```

---

## 4. Faster development with nodemon

Restarting the server by hand gets old. `nodemon` restarts it when files change:

```bash
npm install --save-dev nodemon
```

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

```bash
npm run dev
```

> 📌 Node 18+ has `node --watch app.js`, which does the same thing without any install. We used it in Lesson 10's `dev` script.

---

## 5. Debugging in VS Code

Printing `console.log` works, but the debugger is better for tricky bugs:

1. Open your project folder in VS Code.
2. Click the **Run and Debug** icon (or press `Ctrl + Shift + D`).
3. Click **create a launch.json file** → choose **Node.js**.
4. Click in the gutter left of a line number to set a **breakpoint** (red dot).
5. Press **F5** to start debugging.

The program pauses at the breakpoint. Now you can:

- hover over variables to see their values
- use the **Variables** panel
- step through line by line (**F10** = next line, **F11** = step into)

---

## 📂 Run the example tests

```bash
cd 11-testing
npm install
npm test
```

You should see the three `add` tests pass. ✅

---

## ✏️ Exercise — Test your FizzBuzz (`exercises/`)

1. Open `exercises/fizzbuzz.js` and make `fizzbuzz(n)` work.
   **Contract:** always return a **string** — `"Fizz"`, `"Buzz"`, `"FizzBuzz"`, or the number as a string (`"7"`).
2. Open `exercises/fizzbuzz.test.js` and add the missing tests.
3. Run `npm test`.

```bash
npm test -- exercises
```

(A plain `npm test` runs every test file, including solutions — that's fine, but the `-- exercises` filter runs only that folder.)

Compare with `solutions/fizzbuzz.js` and `solutions/fizzbuzz.test.js` after trying.

**Challenge:** write a test that expects `fizzbuzz` to throw an error for invalid input (like `fizzbuzz("hello")`), then update the function to `throw new TypeError(...)`.

---

## 🧠 Quiz

1. What are the three parts of a good test?
2. What's the difference between `toBe` and `toEqual`?
3. How do you write an async test?
4. What does `--save-dev` mean?
5. How do you set a breakpoint in VS Code?

<details>
<summary>Show answers</summary>

1. **Arrange** (setup), **act** (execute), **assert** (check the result).
2. `toBe` checks exact identity (good for primitives); `toEqual` checks deep equality (good for objects/arrays).
3. Make the test callback `async` and `await` the asynchronous operation inside.
4. Install the package only for development (`devDependencies`), not in production.
5. Click in the gutter to the left of a line number — a red dot appears. Then press F5.

</details>

---

## ✅ Checklist

- [ ] I ran `npm test` and saw passing tests
- [ ] I implemented `fizzbuzz(n)` and all tests pass
- [ ] I know the difference between `toBe` and `toEqual`
- [ ] I tried `node --watch` (or nodemon)
- [ ] I set a breakpoint in VS Code at least once
- [ ] I tried the challenge

**Next:** 🏁 The capstone project →
