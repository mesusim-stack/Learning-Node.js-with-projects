# Lesson 10 — A Real REST API

**Goal:** turn the in-memory to-do routes into a proper REST API that survives restarts, uses environment variables, and validates input.
**Time:** ~90 minutes.

---

## 1. What makes an API "RESTful"?

**REST** is a set of conventions for designing HTTP APIs. The big ideas:

1. **Resources are nouns, not verbs.** Use `/todos`, not `/getTodos`.
2. **The HTTP method is the verb.**

| Method | Route | Meaning | Success status |
|--------|-------|---------|----------------|
| `GET` | `/todos` | list all | 200 |
| `GET` | `/todos/:id` | get one | 200 (404 if missing) |
| `POST` | `/todos` | create one | **201** |
| `PUT` | `/todos/:id` | update one | 200 (404 if missing) |
| `DELETE` | `/todos/:id` | delete one | 200 or **204** |

3. **Use status codes correctly** — don't return 200 for everything.
4. **JSON in, JSON out** (with `Content-Type: application/json`).

### Error handling rule of thumb

| Situation | Status |
|-----------|--------|
| Missing/invalid input | **400** |
| Resource doesn't exist | **404** |
| Server/disk failure | **500** |

---

## 2. Environment variables with `dotenv`

Never hard-code secrets or config. Use a `.env` file:

```
PORT=3000
```

Then load it at the top of your app:

```js
require("dotenv").config(); // reads .env into process.env

const PORT = process.env.PORT || 3000; // fallback if not set
```

- Commit `.env.example` (a template) — **never** commit `.env` (it's in `.gitignore`).
- `process.env.X` is always a **string** (or `undefined`).

Install: `npm install dotenv`

---

## 3. Persistence with a JSON file

No database needed yet. The pattern:

```js
const DATA_FILE = path.join(__dirname, "data", "todos.json");

async function loadTodos() {
  try {
    const text = await fs.readFile(DATA_FILE, "utf8");
    todos = JSON.parse(text);
  } catch (error) {
    if (error.code === "ENOENT") {
      todos = [];              // first run — no file yet
      await saveTodos();
    } else {
      throw error;             // anything else is a real problem
    }
  }
}

async function saveTodos() {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2));
}
```

Call `await saveTodos()` after every change (POST, PUT, DELETE).

### Next id after a restart

```js
nextId = todos.reduce((max, t) => Math.max(max, t.id), 0) + 1;
```

This prevents id collisions after reloading persisted data.

---

## 4. Validation

Never trust input. Check before you save:

```js
function validateTodoInput(body) {
  const errors = [];

  if (typeof body.title !== "string" || body.title.trim() === "") {
    errors.push("title is required and must be a non-empty string");
  }
  if (body.done !== undefined && typeof body.done !== "boolean") {
    errors.push("done must be true or false");
  }

  return errors;
}
```

Then in the route:

```js
const errors = validateTodoInput(req.body || {});
if (errors.length > 0) {
  return res.status(400).json({ errors });
}
```

---

## 5. Async route handlers and errors

`saveTodos()` is async, so handlers become `async` too:

```js
app.post("/todos", async (req, res, next) => {
  try {
    // ...
    await saveTodos();
    res.status(201).json(todo);
  } catch (error) {
    next(error); // hand it to Express's error middleware
  }
});
```

### The error middleware

Four parameters `(error, req, res, next)` — Express recognizes it by the **four** arguments:

```js
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});
```

It catches anything passed to `next(error)`.

---

## 6. Project layout

```
todos-api/
├── app.js            ← the whole API
├── package.json
├── .env.example      ← template (committed)
├── .env              ← your real values (git-ignored)
└── data/
    └── todos.json    ← the "database"
```

---

## 📂 Run it

```bash
cd exercises/todos-api
npm install
npm start
```

The server runs at <http://localhost:3000/todos>.

### Test with PowerShell

```powershell
# list
Invoke-RestMethod http://localhost:3000/todos

# get one
Invoke-RestMethod http://localhost:3000/todos/1

# create
Invoke-RestMethod -Method Post -Uri http://localhost:3000/todos `
  -ContentType "application/json" -Body '{"title":"Learn REST"}'

# update
Invoke-RestMethod -Method Put -Uri http://localhost:3000/todos/1 `
  -ContentType "application/json" -Body '{"done":true}'

# delete
Invoke-RestMethod -Method Delete -Uri http://localhost:3000/todos/1
```

> 💡 In PowerShell, `curl` is an alias for `Invoke-WebRequest` — the flags differ from Linux curl. If you prefer real curl, use `curl.exe`. The VS Code extension **REST Client** is another nice option.

### Test with curl (Git Bash / cmd with curl.exe)

```bash
curl http://localhost:3000/todos
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d "{\"title\":\"Learn REST\"}"
```

---

## ✏️ Exercise — Finish the API (`exercises/todos-api/app.js`)

The starter has the structure and TODOs. Implement:

1. `loadTodos()` / `saveTodos()` — JSON persistence
2. `GET /todos` — optional `?done=true|false` and `?search=text` filters
3. `GET /todos/:id` — 404 when missing
4. `POST /todos` — validate title, assign id, `201`, save to disk
5. `PUT /todos/:id` — partial updates, validate, 404 when missing
6. `DELETE /todos/:id` — remove, save, return the deleted todo
7. 404 fallback and error middleware
8. Load data before `app.listen`

Verify persistence: create a to-do, stop the server (`Ctrl + C`), start it again — the to-do should still be there.

Compare with `solutions/todos-api/app.js` after trying.

**Challenge:** add `GET /todos/stats` that returns `{ total, done, pending }` (define it **before** `/todos/:id`, or Express will treat "stats" as an id!).

---

## 🧠 Quiz

1. Why should the resource path be `/todos` instead of `/getTodos`?
2. Which status code means "created"? Which means "invalid input"?
3. What does `require("dotenv").config()` do?
4. Why does `nextId` need to be recalculated after loading from the file?
5. Why must the error middleware have **four** parameters?

<details>
<summary>Show answers</summary>

1. REST uses paths for **resources** (nouns) and HTTP methods for **actions** (verbs).
2. **201** Created; **400** Bad Request.
3. Reads `.env` and puts the values into `process.env`.
4. Otherwise the first new item after a restart could reuse an existing id and overwrite/confuse records.
5. Express identifies error-handling middleware by its four arguments `(err, req, res, next)`.

</details>

---

## ✅ Checklist

- [ ] `npm install` and `npm start` both work
- [ ] All five CRUD routes work
- [ ] POST validates `title` and returns 400 on bad input
- [ ] Missing ids return 404
- [ ] Data survives a server restart (check `data/todos.json`)
- [ ] `.env` is loaded (try changing `PORT`)
- [ ] I tried both filters and the challenge

**Next:** Lesson 11 — testing and debugging →
