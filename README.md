# 🚀 Node.js for Beginners — Full Course

Welcome! This folder contains a complete, hands-on Node.js course that takes you from **zero JavaScript experience** to building your own **To-do REST API**.

No prior Node.js knowledge is needed. We begin with JavaScript fundamentals and build up one lesson at a time.

---

## What you need

- **Node.js (LTS version)** — download from <https://nodejs.org> (choose "LTS", not "Current")
- **VS Code** (or any code editor) — <https://code.visualstudio.com>
- A terminal — VS Code has one built in: `Terminal → New Terminal` (shortcut: `` Ctrl + ` ``)

Verify Node is installed. In a terminal, type:

```bash
node -v
npm -v
```

You should see version numbers like `v24.x.x` and `11.x.x`. If you see "command not found", reinstall Node.js and **restart** your terminal.

> ⚠️ **Windows / PowerShell note:** If `npm -v` gives a "running scripts is disabled" error, then `npm.ps1` is blocked by your execution policy. Fix it once with:
>
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
> ```
>
> ...or simply run `npm.cmd` instead of `npm` (e.g., `npm.cmd install`). This course writes `npm` in its instructions, but `npm.cmd` works identically.

> 💡 **Windows tip:** Folder names with spaces need quotes in the terminal:
> `cd "C:\Users\Haacha\Node Lesson"`

---

## How to use this course

1. Work through the lessons **in order** — each builds on the one before.
2. For every lesson:
   - Read `README.md` carefully — it explains the concepts in plain English.
   - **Run** the files in `examples/` and read the comments in the code.
   - Try the files in `exercises/` yourself **before** peeking at `solutions/`.
3. Take the quiz at the end of each README (answers are hidden at the bottom).
4. Tick off the ✅ **Checklist** before moving to the next lesson.

Every code file is heavily commented so you can study it line by line. The comments get lighter as the course progresses — that's intentional, so you gradually learn to read "real world" code.

---

## Course roadmap

| Phase | Lesson | Topic | You build |
|-------|--------|-------|-----------|
| 1. JavaScript foundations | 01 | Variables, types, if/else | Number guessing game |
| | 02 | Loops and functions | FizzBuzz + temperature converter |
| | 03 | Arrays, objects, array methods | Gradebook |
| 2. Node core | 04 | Running JS with Node, `process.argv` | Greet CLI + tip calculator |
| | 05 | Modules and npm | Modular calculator |
| | 06 | Files and paths (`fs`, `path`) | Notes CLI |
| | 07 | Async JS (callbacks → promises → async/await) | Async file reader |
| 3. The web | 08 | Your first HTTP server | Mini web server |
| | 09 | Express.js | To-do routes with Express |
| | 10 | REST API, dotenv, validation | Full CRUD to-do API |
| 4. Polish | 11 | Testing and debugging | Automated tests |
| 🏁 | Capstone | Everything combined | **To-do REST API** |

---

## Quick start (your first command)

Open a terminal in this folder and run:

```bash
node 01-js-basics/examples/01-hello.js
```

If you see text printed in the terminal, you're ready. Open `01-js-basics/README.md` and begin! 🎉

---

## Folder structure

```
Node Lesson/
├── 01-js-basics/
├── 02-loops-functions/
├── 03-arrays-objects/
├── 04-js-in-node/
├── 05-modules-npm/
├── 06-files-paths/
├── 07-async/
├── 08-http-server/
├── 09-express/
├── 10-rest-api/
├── 11-testing/
└── capstone/
```

Every lesson folder contains:

| Folder/File | Purpose |
|-------------|---------|
| `README.md` | Concepts, walkthrough, quiz |
| `examples/` | Runnable demo code (read the comments!) |
| `exercises/` | Your turn — fill in the TODOs |
| `solutions/` | Finished answers — check only after trying |

---

## Study tips

- **Type the code yourself** instead of copy-pasting. Muscle memory matters.
- **Break things on purpose** — change a value, delete a line, see what happens.
- If an error appears, **read it from the bottom up** — the last line usually says what went wrong.
- Stuck for more than 15 minutes? Look at the solution, then rewrite it from memory.
- Run code often. Save the file, then run it again — that's the whole workflow.

Happy coding! 💚
