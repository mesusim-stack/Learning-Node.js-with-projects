# Lesson 4 — Running JavaScript with Node

**Goal:** understand what Node.js actually is, run scripts and use the REPL, and read command-line arguments.
**Time:** ~60–90 minutes.

---

## 1. What is Node.js?

Node.js is a **JavaScript runtime**: a program that runs JavaScript **outside the browser**.

- In a browser, JS controls web pages (DOM, buttons, `window`).
- In Node, JS can read files, start servers, talk to databases, and run tools.

Node is built on **V8**, the same engine Chrome uses to run JavaScript — which is why it's fast.

### What Node is good for

| Use case | Example |
|----------|---------|
| Web servers / APIs | Express, Fastify |
| Command-line tools | npm itself, linters |
| Scripts & automation | renaming files, scraping |
| Real-time apps | chat, games |

> ⚠️ In Node there is **no `window` and no `document`** — those belong to browsers. If a tutorial uses them, it's browser JavaScript.

---

## 2. Three ways to run JavaScript

### A) Script files (what we've been doing)

```bash
node examples/01-hello-node.js
```

### B) The REPL — a live playground

Type `node` with no filename and press Enter:

```
$ node
> 2 + 2
4
> "hello".toUpperCase()
'HELLO'
> .exit
```

REPL = **R**ead, **E**val, **P**rint, **L**oop. It evaluates each line immediately. Great for quick experiments. Type `.exit` or press `Ctrl + D` to leave.

### C) `node -e` — run a one-liner

```bash
node -e "console.log('hi from one line')"
```

---

## 3. Useful globals Node gives you

No imports needed:

```js
console.log(process.version);  // Node version, e.g. v24.11.1
console.log(process.platform); // "win32" on Windows
console.log(process.cwd());    // the folder you ran node from
console.log(__dirname);        // the folder this FILE lives in
console.log(__filename);       // the full path of this file
```

`__dirname` and `__filename` exist in CommonJS files (our default). We'll use `__dirname` in Lesson 6 to build reliable file paths.

---

## 4. Command-line arguments with `process.argv`

```bash
node examples/02-argv.js hello 42
```

Node stores everything you typed in `process.argv`, an array:

| Index | Contains |
|-------|----------|
| `[0]` | path to `node.exe` |
| `[1]` | path to your script |
| `[2]` | first argument **you** typed (`"hello"`) |
| `[3]` | second argument (`"42"`) |

```js
const args = process.argv.slice(2); // drop the first two
console.log(args); // [ 'hello', '42' ]
```

> ⚠️ Everything from the command line is a **string**. `"42"` is not the number `42`. Convert with `Number("42")`.

### Converting and validating

```js
const n = Number("42");      // 42
const bad = Number("hello"); // NaN — "Not a Number"

Number.isNaN(bad);           // true
```

### Exiting with a status code

```js
console.error("Usage: node app.js <name>"); // error messages go to stderr
process.exit(1); // 1 = failure. 0 (default) = success.
```

That's how real CLI tools signal success or failure to scripts and terminals.

---

## 📂 Run the examples

```bash
node examples/01-hello-node.js
node examples/02-argv.js
node examples/02-argv.js hello 42
node examples/02-argv.js 5 7
```

Also try the REPL: type `node`, experiment, then `.exit`.

---

## ✏️ Exercise A — Greet CLI (`exercises/greet.js`)

```bash
node exercises/greet.js Maria
# Hello, Maria! Welcome to Node.js.

node exercises/greet.js
# Usage: node greet.js <your name>
```

Steps:

1. Read the name from `process.argv` (index `2`).
2. If missing, print a usage message and `process.exit(1)`.
3. Print the greeting with a template literal.
4. **Bonus:** support a surname too — `node greet.js Maria Santos` → `Hello, Maria Santos!`

## ✏️ Exercise B — Tip calculator (`exercises/tip-calculator.js`)

```bash
node exercises/tip-calculator.js 50 15
# Bill: $50.00
# Tip (15%): $7.50
# Total: $57.50
```

Steps:

1. Read bill amount and tip percent from `process.argv`, convert with `Number()`.
2. Validate: if either is missing or `NaN`, print usage and exit with code 1.
3. Compute `tip = bill * percent / 100` and `total = bill + tip`.
4. Print all three lines with `.toFixed(2)`.
5. **Bonus:** if no percent is given, default to 10%.

Try both before checking `solutions/`.

**Challenge:** make the tip calculator accept a currency symbol as a third argument (`$`, `₱`, `€`) and use it in the output.

---

## 🧠 Quiz

1. What is Node.js in one sentence?
2. What does REPL stand for?
3. In `node greet.js Ana`, which `process.argv` index holds `"Ana"`?
4. Why doesn't `window` exist in Node?
5. What does `process.exit(1)` mean?

<details>
<summary>Show answers</summary>

1. A JavaScript runtime that executes JavaScript outside the browser (built on Chrome's V8 engine).
2. Read, Eval, Print, Loop — an interactive JS prompt.
3. **Index 2** — 0 is `node.exe`, 1 is the script path.
4. Because Node is not a browser; `window` is part of the browser environment.
5. The program stops and reports **failure** (exit code 1). Code 0 means success.

</details>

---

## ✅ Checklist

- [ ] I ran both example files
- [ ] I tried the REPL (`node`, then `.exit`)
- [ ] I finished the greet CLI without peeking
- [ ] I finished the tip calculator
- [ ] I understand why `process.argv[2]` is the first user argument
- [ ] I tried at least one bonus/challenge

**Next:** Lesson 5 — modules and npm →
