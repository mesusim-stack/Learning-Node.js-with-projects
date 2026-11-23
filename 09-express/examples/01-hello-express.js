// ============================================================
// LESSON 9 · FILE 1 — hello-express.js
// Run with:  npm install   (first time only)
//            npm start
// Then open http://localhost:3000
// ============================================================

// require("express") loads the package from node_modules.
const express = require("express");

// Create the app.
const app = express();
const PORT = 3000;

// ---- Middleware: runs on EVERY request before routes ----
// next() says "I'm done, continue to the next step".
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ---- Routes: method + path → handler ----
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// :name is a ROUTE PARAMETER — it matches /hello/anything.
app.get("/hello/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Query string: /greet?name=Ana&age=21
// Everything in req.query is a STRING.
app.get("/greet", (req, res) => {
  const name = req.query.name || "stranger";
  res.send(`Greetings, ${name}!`);
});

// res.json sends JSON with the correct Content-Type header.
app.get("/api/info", (req, res) => {
  res.json({
    framework: "Express",
    lesson: 9,
    time: new Date().toISOString(),
  });
});

// 404 fallback — must come AFTER all routes.
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start listening.
app.listen(PORT, () => {
  console.log(`Express server: http://localhost:${PORT}`);
});

// ---- TRY THIS ----
// 1. Visit /hello/YourName and /greet?name=YourName
// 2. Visit a made-up route like /nope — see the 404 JSON.
// 3. Move the 404 middleware ABOVE the routes and see what breaks.
