// ============================================================
// LESSON 8 · EXERCISE — Mini server
// Run with:  node exercises/mini-server.js
//
// Routes to build:
//   GET /                        → "Welcome to the mini server! Try /about or /api/time"
//   GET /about                   → "This server was built in Lesson 8 — no frameworks!"
//   GET /api/time                → JSON { "time": "<current ISO date>" }
//   GET /api/echo?name=Ana       → JSON { "message": "Hello, Ana!" }
//   anything else                → 404 JSON { "error": "Not found" }
// ============================================================

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // TODO 1 — split req.url into path and query string:
  //   const [path, queryString] = req.url.split("?");
  //   const query = new URLSearchParams(queryString || "");

  // TODO 2 — if path is "/" → text/plain welcome message

  // TODO 3 — if path is "/about" → text/plain about message

  // TODO 4 — if path is "/api/time" → application/json with the current time
  //          Hint: new Date().toISOString()

  // TODO 5 — if path is "/api/echo" → application/json
  //          name = query.get("name") || "stranger"

  // TODO 6 — otherwise → 404 JSON { error: "Not found" }

  // Every branch MUST call res.end(...) to finish the response.
});

server.listen(PORT, () => {
  console.log(`Mini server running at http://localhost:${PORT}`);
});

// BONUS 1 — /api/echo with no name → "Hello, stranger!"
// BONUS 2 — /api/add?a=2&b=3 → { "sum": 5 }
// BONUS 3 — /health → { "status": "ok" }
