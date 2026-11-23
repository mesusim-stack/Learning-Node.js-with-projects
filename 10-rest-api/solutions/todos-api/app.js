// ============================================================
// LESSON 10 · SOLUTION — To-do REST API
// Run with:  npm install
//            copy .env.example .env      (PowerShell: Copy-Item .env.example .env)
//            npm start
// ============================================================

const express = require("express");
const fs = require("fs/promises");
const path = require("path");

// Load .env → process.env
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000; // fallback when .env is missing
const DATA_FILE = path.join(__dirname, "data", "todos.json");

// Parse JSON request bodies into req.body.
app.use(express.json());

// Request logger.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ---------------- Data helpers ----------------

let todos = [];
let nextId = 1;

async function loadTodos() {
  try {
    const text = await fs.readFile(DATA_FILE, "utf8");
    todos = JSON.parse(text);

    // Highest id + 1, so new ids never collide with saved ones.
    nextId = todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
  } catch (error) {
    if (error.code === "ENOENT") {
      // First run: file doesn't exist yet.
      todos = [];
      await saveTodos();
    } else {
      throw error; // real problem → crash on startup with a clear error
    }
  }
}

async function saveTodos() {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2));
}

// ---------------- Validation ----------------

function validateTodoInput(body, options = {}) {
  const errors = [];
  const partial = options.partial === true; // PUT can update only some fields

  if (!partial || body.title !== undefined) {
    if (typeof body.title !== "string" || body.title.trim() === "") {
      errors.push("title is required and must be a non-empty string");
    }
  }

  if (body.done !== undefined && typeof body.done !== "boolean") {
    errors.push("done must be true or false");
  }

  return errors;
}

// ---------------- Routes ----------------

// GET /todos — optional filters: ?done=true|false, ?search=text
app.get("/todos", (req, res) => {
  let result = todos;

  if (req.query.done !== undefined) {
    const done = req.query.done === "true"; // query values are strings
    result = result.filter((todo) => todo.done === done);
  }

  if (req.query.search) {
    const term = req.query.search.toLowerCase();
    result = result.filter((todo) =>
      todo.title.toLowerCase().includes(term)
    );
  }

  res.json(result);
});

// GET /todos/:id
app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: `Todo ${id} not found` });
  }

  res.json(todo);
});

// POST /todos
app.post("/todos", async (req, res, next) => {
  try {
    const errors = validateTodoInput(req.body || {});
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const todo = {
      id: nextId++,
      title: req.body.title.trim(),
      done: req.body.done === true,
      createdAt: new Date().toISOString(),
    };

    todos.push(todo);
    await saveTodos();

    res.status(201).json(todo); // 201 = Created
  } catch (error) {
    next(error); // hand the failure to the error middleware
  }
});

// PUT /todos/:id — partial update
app.put("/todos/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      return res.status(404).json({ error: `Todo ${id} not found` });
    }

    const errors = validateTodoInput(req.body || {}, { partial: true });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    if (req.body.title !== undefined) todo.title = req.body.title.trim();
    if (req.body.done !== undefined) todo.done = req.body.done;
    todo.updatedAt = new Date().toISOString();

    await saveTodos();
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

// DELETE /todos/:id
app.delete("/todos/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const index = todos.findIndex((t) => t.id === id);

    if (index === -1) {
      return res.status(404).json({ error: `Todo ${id} not found` });
    }

    // splice(index, 1) removes 1 item and returns it inside an array.
    const [removed] = todos.splice(index, 1);
    await saveTodos();

    // Alternative: res.status(204).end(); // No Content
    res.json({ message: "Deleted", todo: removed });
  } catch (error) {
    next(error);
  }
});

// ---------------- Fallbacks ----------------

// 404 — reached only when no route matched.
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error middleware — Express recognizes it by the FOUR parameters.
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error);
  res.status(500).json({ error: "Internal server error" });
});

// ---------------- Start ----------------

async function start() {
  await loadTodos(); // important: load BEFORE accepting requests
  app.listen(PORT, () => {
    console.log(`To-do API running at http://localhost:${PORT}`);
    console.log(`Try: http://localhost:${PORT}/todos`);
  });
}

start().catch((error) => {
  console.error("Failed to start:", error);
  process.exit(1);
});
