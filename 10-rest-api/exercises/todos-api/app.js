// ============================================================
// LESSON 10 · EXERCISE — To-do REST API
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
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "todos.json");

// Parse JSON request bodies.
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
  // TODO 1 — try to read DATA_FILE and JSON.parse it into `todos`.
  //          - if error.code === "ENOENT" → empty list, then saveTodos()
  //          - otherwise throw the error
  // TODO 2 — set nextId = highest existing id + 1
}

async function saveTodos() {
  // TODO 3 — make sure data/ exists, then write pretty JSON
}

// ---------------- Validation ----------------

function validateTodoInput(body, options = {}) {
  // TODO 4 — return an array of error messages:
  //   - title: required (unless options.partial), must be a non-empty string
  //   - done: if present, must be a boolean
  return [];
}

// ---------------- Routes ----------------

// TODO 5 — GET /todos (support ?done=true|false and ?search=text)

// TODO 6 — GET /todos/:id (404 if missing)

// TODO 7 — POST /todos (validate → 400, create → 201, save)

// TODO 8 — PUT /todos/:id (404 if missing, partial update, validate, save)

// TODO 9 — DELETE /todos/:id (404 if missing, remove, save)

// ---------------- Fallbacks ----------------

// TODO 10 — 404 fallback (after all routes)

// TODO 11 — error middleware with FOUR parameters (error, req, res, next)

// ---------------- Start ----------------

// TODO 12 — load data BEFORE listening:
//   async function start() {
//     await loadTodos();
//     app.listen(PORT, () => ...);
//   }
//   start().catch((error) => { console.error(error); process.exit(1); });
