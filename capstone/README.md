# 🏁 Capstone — To-do REST API

**Time:** 2–3 sessions.
**Goal:** build a complete To-do REST API **mostly on your own**, using everything from Lessons 1–11.

This is the final project. The starter has a skeleton; you fill in the logic. Use the Lesson 10 solution only as a reference if you're truly stuck — the point is to build it yourself.

---

## 📋 Requirements

Your API must support:

| Method | Route | Behavior |
|--------|-------|----------|
| GET | `/todos` | list all todos |
| GET | `/todos?done=true\|false` | filter by completion |
| GET | `/todos?search=text` | filter by title (case-insensitive) |
| GET | `/todos/:id` | one todo, **404** if missing |
| POST | `/todos` | create: `{ "title": "...", "done": false }` → **201** |
| PUT | `/todos/:id` | partial update (`title` and/or `done`), **404** if missing |
| DELETE | `/todos/:id` | remove, return the deleted todo, **404** if missing |

Plus:

- [ ] `title` required on POST — non-empty string, else **400** with an error message
- [ ] `done` must be a boolean when provided — else **400**
- [ ] Data persists to `data/todos.json` and survives restarts
- [ ] `PORT` read from `.env` (with a fallback)
- [ ] Unknown routes return **404** JSON
- [ ] Errors go through a 4-parameter error middleware → **500**
- [ ] Every request is logged (`method + url`)
- [ ] A `README.md` for **your** API (installation + endpoints + examples)

---

## 🪜 Milestones

Work in this order. Run the server after each step.

### Milestone 1 — Server boots
- `npm install`
- Copy `.env.example` to `.env`
- `npm start` → server responds (even if routes are empty)

### Milestone 2 — Read-only routes
- GET `/todos` (all)
- GET `/todos/:id` (+ 404)
- Load data from `data/todos.json`

### Milestone 3 — Write routes
- POST with validation (400 / 201)
- PUT with partial updates
- DELETE returning the removed todo
- Call `saveTodos()` after every change

### Milestone 4 — Polish
- Filters (`done`, `search`)
- 404 fallback + error middleware
- Logging middleware
- Test persistence: create → stop → start → still there

---

## 🧪 Acceptance checklist (test all of these)

```powershell
Invoke-RestMethod http://localhost:3000/todos
Invoke-RestMethod -Method Post -Uri http://localhost:3000/todos -ContentType "application/json" -Body '{"title":"Finish capstone"}'
Invoke-RestMethod -Method Post -Uri http://localhost:3000/todos -ContentType "application/json" -Body '{"title":""}'          # expect 400
Invoke-RestMethod -Method Put -Uri http://localhost:3000/todos/1 -ContentType "application/json" -Body '{"done":true}'
Invoke-RestMethod http://localhost:3000/todos?done=true
Invoke-RestMethod http://localhost:3000/todos?search=capstone
Invoke-RestMethod -Method Delete -Uri http://localhost:3000/todos/1
Invoke-RestMethod http://localhost:3000/nope                                                                                  # expect 404
```

- [ ] All of the above behave as described
- [ ] Invalid `done` (`"maybe"`) → 400
- [ ] Restart the server → data still present
- [ ] Change `PORT` in `.env` → server moves ports

---

## 🌟 Stretch goals

Pick any that interest you:

1. **Tags** — each todo has `tags: []`; filter with `?tag=school`.
2. **Stats endpoint** — `GET /todos/stats` → `{ total, done, pending }` (define it **before** `/:id`).
3. **Timestamps** — always set `createdAt` and `updatedAt`.
4. **Tests** — Jest + Supertest for the main routes (Lesson 11).
5. **Swagger/REST Client file** — a `requests.http` file documenting every endpoint.
6. **Deploy** — put it on Render or Railway (free tiers), share the URL.
7. **Frontend** — a tiny HTML page that fetches and displays the todos.

---

## 🧭 Getting unstuck

- Re-read Lesson 10 — the solution there is a complete implementation.
- Debug in this order: **terminal logs** → **`console.log(req.body)`** → **breakpoint**.
- Common bugs:
  - `req.body` is `undefined` → forgot `app.use(express.json())`
  - `Cannot read properties of undefined` → forgot `app.use(express.json())` again
  - Changes don't persist → forgot `await saveTodos()`
  - Duplicate ids after restart → forgot to recalculate `nextId`
  - `/todos/stats` returns 404 for "stats" as an id → define static routes before `/:id`
  - `EADDRINUSE` → old server still running (restart the terminal)

---

## 📝 Project README (required)

Create a `README.md` inside your project with:

1. Project name and one-line description
2. How to install and run
3. Endpoint table (method, path, description)
4. Example requests and responses
5. What you'd add next

Writing docs is part of shipping software. 🚢

---

## 🎓 When you're done

You will have gone from **no JavaScript** to a working, tested, documented REST API. That's a real milestone.

What to learn next:

- **Databases:** SQL basics → SQLite or PostgreSQL (with `pg`)
- **Authentication:** sessions, JWT, hashing with `bcrypt`
- **TypeScript:** JavaScript with types — the industry standard
- **Fastify:** a faster, modern alternative to Express
- **React / frontend:** connect a UI to your API
