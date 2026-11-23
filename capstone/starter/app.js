// ============================================================
// CAPSTONE STARTER — To-do REST API
// This is YOUR project. Use everything from Lessons 1–10.
//
// Run:  npm install
//       Copy-Item .env.example .env
//       npm start
//
// Work through the milestones in ../README.md one at a time.
// ============================================================

const express = require("express");
const fs = require("fs/promises");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "todos.json");

// Parse JSON bodies.
app.use(express.json());

// Request logger.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ---------------- Data ----------------

let todos = [];
let nextId = 1;

// MILESTONE 2 — read data/todos.json into `todos`
async function loadTodos() {
  // TODO
}

// MILESTONE 3 — write `todos` to data/todos.json
async function saveTodos() {
  // TODO
}

// ---------------- Validation ----------------

// MILESTONE 3 — return an array of error messages
function validateTodoInput(body, options = {}) {
  // TODO
  return [];
}

// ---------------- Routes ----------------

// MILESTONE 2 — GET /todos (+ ?done= and ?search= filters)
// app.get("/todos", ...)

// MILESTONE 2 — GET /todos/:id (404 if missing)
// app.get("/todos/:id", ...)

// MILESTONE 3 — POST /todos (validate → 400, create → 201, save)
// app.post("/todos", ...)

// MILESTONE 3 — PUT /todos/:id (partial update, 404 if missing)
// app.put("/todos/:id", ...)

// MILESTONE 3 — DELETE /todos/:id (404 if missing, return deleted todo)
// app.delete("/todos/:id", ...)

// MILESTONE 4 — 404 fallback
// app.use(...)

// MILESTONE 4 — error middleware with FOUR parameters
// app.use((error, req, res, next) => { ... })

// ---------------- Start ----------------

// Load data, then listen.
async function start() {
  await loadTodos();
  app.listen(PORT, () => {
    console.log(`To-do API running at http://localhost:${PORT}`);
    console.log(`Try: http://localhost:${PORT}/todos`);
  });
}

start().catch((error) => {
  console.error("Failed to start:", error);
  process.exit(1);
});
