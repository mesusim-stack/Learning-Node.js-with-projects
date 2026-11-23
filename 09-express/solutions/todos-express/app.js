// ============================================================
// LESSON 9 · SOLUTION — To-do routes with Express
// Run with:  npm install
//            npm start
// ============================================================

const express = require("express");

const app = express();
const PORT = 3000;

let todos = [
  { id: 1, title: "Learn Express", done: true },
  { id: 2, title: "Build the to-do API", done: false },
];
let nextId = 3;

// Parse JSON bodies. Without this, req.body is undefined!
// Must be registered BEFORE the routes that use req.body.
app.use(express.json());

// Logging middleware.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ---- GET /todos ---- (BONUS: ?done=true filter)
app.get("/todos", (req, res) => {
  // If ?done= was given, filter by it.
  if (req.query.done !== undefined) {
    const done = req.query.done === "true"; // query values are strings
    return res.json(todos.filter((todo) => todo.done === done));
  }

  res.json(todos);
});

// ---- GET /todos/:id ----
app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id); // params are strings!
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: `Todo ${id} not found` });
  }

  res.json(todo);
});

// ---- POST /todos ----
app.post("/todos", (req, res) => {
  const title = req.body.title;

  // Validate: must be a non-empty string.
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title is required" });
  }

  const todo = {
    id: nextId++,
    title: title.trim(),
    done: false,
  };

  todos.push(todo);
  res.status(201).json(todo); // 201 = Created
});

// ---- PUT /todos/:id ----
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: `Todo ${id} not found` });
  }

  // Only update what was actually provided.
  if (req.body.title !== undefined) {
    if (typeof req.body.title !== "string" || req.body.title.trim() === "") {
      return res.status(400).json({ error: "title must be a non-empty string" });
    }
    todo.title = req.body.title.trim();
  }

  if (req.body.done !== undefined) {
    if (typeof req.body.done !== "boolean") {
      return res.status(400).json({ error: "done must be true or false" });
    }
    todo.done = req.body.done;
  }

  res.json(todo);
});

// ---- DELETE /todos/:id ----
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Todo ${id} not found` });
  }

  // splice(index, 1) removes 1 item and returns it in an array.
  const [removed] = todos.splice(index, 1);
  res.json({ message: "Deleted", todo: removed });
});

// ---- 404 fallback (AFTER all routes) ----
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`To-do server: http://localhost:${PORT}/todos`);
});
