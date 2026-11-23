// ============================================================
// LESSON 9 · EXERCISE — To-do routes with Express
// Run with:  npm install
//            npm start
// ============================================================

const express = require("express");

const app = express();
const PORT = 3000;

// In-memory to-do list (lost when the server restarts — that's okay for now).
let todos = [
  { id: 1, title: "Learn Express", done: true },
  { id: 2, title: "Build the to-do API", done: false },
];
let nextId = 3;

// TODO 1 — app.use(express.json()) — MUST come before the routes!

// TODO 2 — logging middleware: log `${req.method} ${req.url}` and call next()

// TODO 3 — GET /todos → res.json(todos)

// TODO 4 — GET /todos/:id → find by id
//          not found → res.status(404).json({ error: `Todo ${id} not found` })

// TODO 5 — POST /todos → validate req.body.title (non-empty string),
//          create { id: nextId, title, done: false }, push, res.status(201).json(todo)
//          invalid input → res.status(400).json({ error: "title is required" })

// TODO 6 — PUT /todos/:id → update title and/or done, return the updated todo
//          not found → 404

// TODO 7 — DELETE /todos/:id → remove it, return { message: "Deleted", todo }
//          not found → 404

// TODO 8 — 404 fallback AFTER all routes:
//          res.status(404).json({ error: "Route not found" })

app.listen(PORT, () => {
  console.log(`To-do server: http://localhost:${PORT}/todos`);
});

// BONUS — GET /todos?done=true → only completed todos
