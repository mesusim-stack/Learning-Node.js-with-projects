// ============================================================
// LESSON 8 · FILE 1 — hello-server.js
// Run with:  node examples/01-hello-server.js
// Then open http://localhost:3000 in your browser.
// Stop the server with Ctrl + C.
// ============================================================

// "http" is a built-in module — no npm install needed.
const http = require("http");

// The port is like a door number on your computer.
// 3000 is a common choice for development.
const PORT = 3000;

// createServer takes a function that runs for EVERY request.
//   req = the incoming request (what the browser asked for)
//   res = the response we send back
const server = http.createServer((req, res) => {
  // Log every visit so you can see requests arrive.
  console.log(`${req.method} ${req.url}`);

  // Status 200 = "OK". The header says we're sending plain text.
  res.writeHead(200, { "Content-Type": "text/plain" });

  // end() sends the response body and finishes the response.
  res.end("Hello from my Node server!");
});

// Start listening for requests.
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// ---- TRY THIS ----
// 1. Visit http://localhost:3000/anything — notice it still says hello.
//    Every path gets the same response for now.
// 2. Change the message and restart the server (Ctrl + C, then run again).
// 3. Open the page in two tabs at once — both requests get logged.
