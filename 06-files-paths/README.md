# Lesson 6 — Files and Paths (`fs` and `path`)

**Goal:** read and write files, build reliable paths, and save data as JSON.
**Time:** ~90 minutes.

---

## 1. The `fs` module

`fs` = **f**ile **s**ystem. It's built into Node, so no `npm install`.

```js
const fs = require("fs");
```

### Reading a file

```js
const content = fs.readFileSync("notes.txt", "utf8");
console.log(content);
```

- `"utf8"` tells Node the file is **text**. Without it you get raw bytes (a `Buffer`).
- `readFileSync` is **synchronous** — it blocks until the file is fully read.

### Writing a file

```js
fs.writeFileSync("output.txt", "Hello!\n");
```

⚠️ **Writing replaces the whole file.** To add to the end, use:

```js
fs.appendFileSync("output.txt", "One more line.\n");
```

`\n` means "new line".

### Sync vs async

| Style | Example | When |
|-------|---------|------|
| **Sync** | `fs.readFileSync(...)` | small scripts, startup code |
| **Async** | `fs.readFile(...)` | servers, anything user-facing |

Sync blocks everything else while it waits. For quick CLI tools it's fine — and much easier to read. In Lesson 7 we'll learn the async version properly.

### Common errors

```js
try {
  const text = fs.readFileSync("missing.txt", "utf8");
} catch (error) {
  console.log(error.code);    // "ENOENT" = file does not exist
  console.log(error.message); // human-readable description
}
```

`try/catch` runs the `try` block; if it throws, the `catch` block handles it instead of crashing.

---

## 2. The `path` module

Never glue paths together with `+` and `"/"` — Windows uses `\`, other systems use `/`.

```js
const path = require("path");

const file = path.join("data", "notes.json");
console.log(file); // data\notes.json  (on Windows)
```

### The magic combo: `__dirname` + `path.join`

```js
const DATA_FILE = path.join(__dirname, "data", "notes.json");
```

- `__dirname` = the folder of **this file** (not where you ran the command)
- `path.join` = builds a correct path for the current OS

This makes your program work no matter where the terminal is pointed. **Use this pattern whenever you touch files.**

### `path` helpers

```js
path.basename("/data/notes.json")  // "notes.json"
path.dirname("/data/notes.json")   // "/data"
path.extname("notes.json")         // ".json"
```

---

## 3. JSON — saving structured data

**JSON** is text that looks like JavaScript objects. It can only hold strings, numbers, booleans, `null`, arrays, and objects.

```json
{
  "name": "Ana",
  "age": 21,
  "hobbies": ["reading", "gaming"]
}
```

### Converting both ways

```js
const obj = { name: "Ana", age: 21 };

// object → text (save to a file)
const text = JSON.stringify(obj, null, 2); // the 2 = pretty indentation

// text → object (read from a file)
const parsed = JSON.parse(text);
console.log(parsed.name); // Ana
```

⚠️ `JSON.parse` **throws** on invalid text. Wrap it in `try/catch` when reading user files.

### The save/load loop

```js
const notes = loadNotes();      // read file → JSON.parse → array
notes.push({ id: 1, text: "Learn JSON" });
saveNotes(notes);               // JSON.stringify → write file
```

That's exactly how settings, to-do apps, and small databases work.

### Making sure a folder exists

```js
fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
```

`recursive: true` creates parent folders too **and** doesn't complain if it already exists. Call it before writing.

---

## 📂 Run the examples

```bash
node examples/01-read-file.js
node examples/02-write-file.js
node examples/03-json.js
```

Check the `examples/output/` folder afterwards — your programs created files there! 📁

---

## ✏️ Exercise — Notes CLI (`exercises/notes-cli/notes.js`)

A real command-line notes app that saves to `data/notes.json`:

```bash
node notes.js add "Buy milk"
# Added note #1: Buy milk

node notes.js add "Study Node"
# Added note #2: Study Node

node notes.js list
# 1. Buy milk
# 2. Study Node

node notes.js delete 1
# Deleted note #1.

node notes.js list
# 2. Study Node
```

Requirements:

1. `loadNotes()` — return `[]` if the file doesn't exist; otherwise read + `JSON.parse` (with try/catch).
2. `saveNotes(notes)` — create `data/` if needed, then write pretty JSON.
3. Handle the commands `add`, `list`, `delete`.
4. Unknown command → print usage instructions.

Only after trying, compare with `solutions/notes-cli/notes.js`.

**Challenge:** add an `edit` command: `node notes.js edit 2 "New text"` replaces note #2's text.

---

## 🧠 Quiz

1. What's the difference between `readFileSync` and `readFile`?
2. Why use `path.join(__dirname, ...)` instead of a plain string?
3. What does `JSON.parse` do? And `JSON.stringify`?
4. What does error code `ENOENT` mean?
5. How do you create a folder only if it doesn't exist?

<details>
<summary>Show answers</summary>

1. `readFileSync` **blocks** until done and returns the data; `readFile` takes a callback/promise and runs **asynchronously**.
2. It builds a correct path for the current OS and works regardless of the terminal's current folder (`__dirname` anchors it to the file's location).
3. `JSON.parse` converts JSON **text → object**; `JSON.stringify` converts an **object → JSON text**.
4. "Error NO ENTry" — the file or folder does not exist.
5. `fs.mkdirSync(folder, { recursive: true })` — it's safe to call even if the folder exists.

</details>

---

## ✅ Checklist

- [ ] I ran all three examples
- [ ] I saw the files my scripts created in `examples/output/`
- [ ] I completed the Notes CLI with `add`, `list`, and `delete`
- [ ] My notes persist between runs (check `data/notes.json`)
- [ ] I tried the `edit` challenge
- [ ] I can explain why `path.join(__dirname, ...)` is the safe pattern

**Next:** Lesson 7 — asynchronous JavaScript →
