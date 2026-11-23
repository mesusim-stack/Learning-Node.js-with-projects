# Lesson 9 — Express.js

**Goal:** replace hand-written routing with Express, the most popular Node web framework.
**Time:** ~90 minutes.

---

## 1. Why Express?

In Lesson 8 we wrote `if (path === "...")` for every route. Express gives us:

- clean route methods: `app.get(...)`, `app.post(...)`
- route **parameters** (`/todos/:id`)
- **query string** parsing (`req.query`)
- **body** parsing (`express.json()`)
- **middleware** — functions that run before your routes
- static file serving

It's the foundation of countless Node APIs.

---

## 2. Install and first server

```bash
npm install express
```

```js
const express = require("express");

const app = express(); // create the app
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
```

- `req` and `res` work like before, plus many helpers.
- `res.send(text)` — sends a response (guesses the content type)
- `res.json(obj)` — sends JSON with the right header
- `res.status(404)` — sets the status code

### Status + JSON together

```js
res.status(404).json({ error: "Not found" });
```

This is the Express idiom. You'll write it constantly.

---

## 3. Route parameters

```js
// :id is a placeholder. /todos/42 → req.params.id === "42"
app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ id });
});
```

⚠️ `req.params.id` is always a **string**. Convert with `Number()` when you need a number.

---

## 4. Query strings

```
GET /todos?done=true&search=milk
```

```js
app.get("/todos", (req, res) => {
  console.log(req.query);     // { done: "true", search: "milk" }
  const done = req.query.done === "true"; // query values are strings!
});
```

---

## 5. Request bodies and `express.json()`

`POST` and `PUT` requests can have a JSON body:

```json
{ "title": "Learn Express" }
```

Express does **not** parse it automatically. Add this **before** your routes:

```js
app.use(express.json());
```

Then:

```js
app.post("/todos", (req, res) => {
  console.log(req.body.title); // "Learn Express"
});
```

Without `express.json()`, `req.body` is `undefined` — a classic beginner bug.

---

## 6. Middleware

A **middleware** is a function that runs on requests before they reach routes. It receives `(req, res, next)` and must call `next()` to continue.

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // "I'm done, keep going"
});
```

Common uses: logging, authentication, parsing bodies, CORS.

Order matters — middleware and routes run **in the order you define them**.

### 404 fallback

Put this **after all routes**:

```js
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
```

If a request reaches it, no route matched.

---

## 7. Serving static files (bonus)

```js
app.use(express.static("public"));
```

Now any file in `public/` is served directly: `public/logo.png` → `http://localhost:3000/logo.png`.

---

## 📂 Run the example

```bash
cd examples
npm install
npm start
```

Then visit:
- <http://localhost:3000/>
- <http://localhost:3000/about>
- <http://localhost:3000/hello/Maria>
- <http://localhost:3000/greet?name=Ana>

Stop with `Ctrl + C`.

---

## ✏️ Exercise — To-do routes with Express (`exercises/todos-express/app.js`)

Build an in-memory to-do API (data resets when the server restarts — that's fine for now):

```js
let todos = [
  { id: 1, title: "Learn Express", done: true },
  { id: 2, title: "Build the to-do API", done: false },
];
let nextId = 3;
```

| Method | Route | Behavior |
|--------|-------|----------|
| GET | `/todos` | all todos (JSON) |
| GET | `/todos/:id` | one todo, or **404** |
| POST | `/todos` | create from `req.body.title` → **201** |
| PUT | `/todos/:id` | update `title` and/or `done` |
| DELETE | `/todos/:id` | remove it, return `{ message, todo }` |

Requirements:

1. `app.use(express.json())` **before** routes.
2. Validate on POST: `title` must be a non-empty string → **400** otherwise.
3. Unknown routes → **404** JSON.
4. Log every request with middleware.

Test with the browser (GET) and PowerShell for the rest:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:3000/todos `
  -ContentType "application/json" -Body '{"title":"Study Express"}'
```

Compare with `solutions/todos-express/app.js` after trying.

**Challenge:** support `GET /todos?done=true` to filter completed items.

---

## 🧠 Quiz

1. What does `app.use(express.json())` do?
2. How do you read a route parameter? A query parameter?
3. Why is `req.params.id` a string, even for `/todos/42`?
4. Where must the 404 middleware be defined?
5. What does `next()` do in middleware?

<details>
<summary>Show answers</summary>

1. It parses JSON request bodies into `req.body` for `POST`/`PUT` requests.
2. Route param: `req.params.id` (`/todos/:id`). Query param: `req.query.done` (`?done=true`).
3. URLs are text — everything in a URL arrives as a string. Convert with `Number()`.
4. **After** all routes — otherwise it would catch every request first.
5. Passes control to the next middleware or route. Without it, the request hangs.

</details>

---

## ✅ Checklist

- [ ] I ran the Express example and visited every route
- [ ] I built all five to-do routes
- [ ] POST works with a JSON body (I used `express.json()`)
- [ ] Bad input returns 400; missing items return 404
- [ ] I tested DELETE
- [ ] I tried the filter challenge

**Next:** Lesson 10 — a real REST API with persistence →
