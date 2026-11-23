// ============================================================
// LESSON 8 · SOLUTION — Mini server
// Run with:  node solutions/mini-server.js
// ============================================================

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Split the URL into path and query string.
  // "/api/echo?name=Ana" → path="/api/echo", queryString="name=Ana"
  // Destructuring: const [path, queryString] = array
  const [path, queryString] = req.url.split("?");

  // URLSearchParams makes query strings easy to read.
  // The || "" handles URLs that have no "?" at all.
  const query = new URLSearchParams(queryString || "");

  // ---- ROUTES ----
  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the mini server! Try /about or /api/time");
  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This server was built in Lesson 8 — no frameworks!");
  } else if (path === "/api/time") {
    // JSON responses need the application/json content type.
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ time: new Date().toISOString() }));
  } else if (path === "/api/echo") {
    // .get() returns null if the parameter is missing.
    const name = query.get("name") || "stranger";
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `Hello, ${name}!` }));
  } else if (path === "/api/add") {
    // BONUS — add two numbers from the query string.
    const a = Number(query.get("a"));
    const b = Number(query.get("b"));

    if (Number.isNaN(a) || Number.isNaN(b)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "a and b must be numbers" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ sum: a + b }));
    }
  } else if (path === "/health") {
    // CHALLENGE — a health check endpoint.
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  } else {
    // Nothing matched → 404 Not Found.
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Mini server running at http://localhost:${PORT}`);
});
