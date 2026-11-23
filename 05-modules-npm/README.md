# Lesson 5 — Modules and npm

**Goal:** split code across files (modules) and understand the npm ecosystem.
**Time:** ~90 minutes.

---

## 1. Why modules?

Real programs are too big for one file. Modules let you:

- keep code organized (one file = one job)
- reuse code without copy-pasting
- share code with the world (npm packages)

Node has two module systems. This course uses the classic one, **CommonJS** — you'll still see it everywhere. We'll mention the modern one (ES Modules) at the end.

---

## 2. CommonJS: `require` and `module.exports`

**`math.js` — a module that shares code:**

```js
function add(a, b) {
  return a + b;
}

const PI = 3.14159;

// module.exports is this file's "public interface".
module.exports = { add, PI };   // { add } is short for { add: add }
```

**`use-math.js` — a file that uses it:**

```js
// ./ means "math.js in THIS folder". The ./ is required for local files!
const math = require("./math");

console.log(math.add(2, 3)); // 5
console.log(math.PI);        // 3.14159

// You can also destructure:
const { add } = require("./math");
```

### Built-in vs local vs installed modules

| `require(...)` | Loads |
|----------------|-------|
| `require("./math")` | **your** file `math.js` in the same folder |
| `require("fs")` | a **built-in** Node module |
| `require("express")` | a package **installed** in `node_modules/` |

No `./` = NOT your file. That's the rule that trips up beginners most.

---

## 3. npm — the Node Package Manager

npm does two jobs:

1. **Installs** packages (libraries other people wrote)
2. **Runs scripts** for your project

It comes bundled with Node — nothing extra to install.

> ⚠️ **PowerShell:** if `npm` says "running scripts is disabled", use `npm.cmd` instead, or run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once.

### Starting a project: `package.json`

`package.json` is your project's ID card: its name, scripts, and dependencies.

```bash
npm init -y
```

`-y` accepts all defaults. The result looks like:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "ISC"
}
```

### Scripts — your own commands

In `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "node --watch index.js"
}
```

Then run:

```bash
npm start          # runs "node index.js"
npm run dev        # for scripts not named start/test
```

`node --watch` restarts automatically when the file changes — very handy.

### Installing a package

```bash
npm install chalk
```

This:

1. downloads the package into `node_modules/`
2. records it in `package.json` under `"dependencies"`
3. creates `package-lock.json` (exact versions, so installs are reproducible)

```js
const chalk = require("chalk"); // now it works
```

Then another person (or future you) can run `npm install` to get everything.

> 📌 `node_modules/` can be huge — **never commit it** to Git. That's what `.gitignore` is for (we already added one at the course root).

### Handy npm commands

| Command | What it does |
|---------|--------------|
| `npm init -y` | create `package.json` with defaults |
| `npm install <pkg>` | install a package |
| `npm install` | install everything listed in `package.json` |
| `npm install --save-dev <pkg>` | install a tool needed only for development |
| `npm uninstall <pkg>` | remove a package |
| `npm start` | run the `start` script |

---

## 4. ES Modules (modern syntax — just so you recognize it)

Newer projects often use `import` / `export` instead. To enable it, add `"type": "module"` to `package.json`, then:

```js
// math.mjs
export function add(a, b) { return a + b; }

// use-math.mjs
import { add } from "./math.mjs";
```

Same idea, different keywords. **We'll stick with CommonJS** in this course — when you see `import` in a tutorial, now you know it's the same concept.

---

## 📂 Run the examples

```bash
node examples/use-math.js
```

(`use-math.js` requires `math.js` — notice there's no `package.json` needed for this.)

---

## ✏️ Exercise — Modular calculator

Inside `exercises/calculator/`:

| File | Purpose |
|------|---------|
| `operations.js` | four math functions + `module.exports` |
| `index.js` | requires `operations.js` and prints results |
| `package.json` | has a `start` script |

Steps:

1. Open `operations.js` — finish `multiply` and `divide`, then export all four.
2. Open `index.js` — require the module, call each function, print results.
3. Run it:
   ```bash
   cd exercises/calculator
   npm start
   ```

Compare with `solutions/calculator/` after trying.

**Challenge:** add a `power(base, exponent)` function and a `"5 ^ 2 = 25"` line.

---

## 🧠 Quiz

1. What does `module.exports` do?
2. Why does `require("./math")` need `./` but `require("fs")` doesn't?
3. What file records your project's dependencies?
4. What does `npm install` (with no package name) do?
5. Where do installed packages end up?

<details>
<summary>Show answers</summary>

1. It defines what this file **shares** with other files that `require` it.
2. `./` means "a local file in this folder"; without it, Node looks for a **built-in module or an installed package**.
3. `package.json` (and `package-lock.json` pins exact versions).
4. It reads `package.json` and installs **all** listed dependencies into `node_modules/`.
5. In the `node_modules/` folder — which should never be committed to Git.

</details>

---

## ✅ Checklist

- [ ] I ran `examples/use-math.js`
- [ ] I completed the modular calculator
- [ ] I ran it with `npm start`
- [ ] I can explain `require` vs `module.exports`
- [ ] I know why `node_modules/` is git-ignored
- [ ] I tried the challenge

**Next:** Lesson 6 — reading and writing files →
