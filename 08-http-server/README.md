# Lesson 8 — Your First HTTP Server

**Goal:** understand how the web works and build a server with only Node's built-in `http` module.
**Time:** ~90 minutes.

---

## 1. How the web works (the 30-second version)

A **client** (browser, `curl`, a mobile app) sends a **request** to a **server**. The server sends back a **response**.

```
CLIENT  ── request ──▶  SERVER
        ◀── response ──
```

A request contains:

| Part | Example |
|------|---------|
| **Method** | `GET` (read), `POST` (create), `PUT` (replace), `DELETE` |
| **Path** | `/todos`, `/about` |
| **Headers** | extra info like `Content-Type` |
| **Body** | data sent to the server (usually for `POST`/`PUT`) |

A response contains:

| Part | Example |
|------|---------|
| **Status code** | `200 OK`, `404 Not Found` |
| **Headers** | `Content-Type: application/json` |
| **Body** | HTML, JSON, text… |

### Status codes to know

| Code | Meaning |
|------|---------|
| **200** | OK — success |
| **201** | Created — new resource made |
| **204** | No Content — success, nothing to return |
| **301** | Moved Permanently — redirect |
| **400** | Bad Request — client sent bad data |
| **404** | Not Found |
| **500** | Internal Server Error — the server broke |

### Ports and localhost

- `localhost` = **this computer** (IP `127.0.0.1`)
- `:3000` = the **port** — like a door number. Servers listen on a port; clients knock on it.

`http://localhost:3000/about` → "on this computer, at door 3000, ask for `/about`".

---

## 2. Your first server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from my server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

- `createServer(fn)` — `fn` runs **on every request**
- `req` — the incoming **request** (method, URL, headers)
- `res` — the outgoing **response**
- `res.writeHead(status, headers)` — set the status and headers
- `res.end(body)` — send the body and finish the response
- `server.listen(port, callback)` — start listening

### Try it

1. Run `node examples/01-hello-server.js`
2. Open <http://localhost:3000> in your browser
3. Watch the terminal — every visit is logged
4. Press `Ctrl + C` in the terminal to stop the server

> ⚠️ If you see `EADDRINUSE`, another program is already using port 3000. Stop the other server (`Ctrl + C`) or change `PORT`.

---

## 3. URLs, paths, and query strings

The browser asks for a URL like:

```
http://localhost:3000/api/echo?name=Ana
                         └──path──┘ └─query─┘
```

```js
const url = "/api/echo?name=Ana";

const [path, queryString] = url.split("?"); // "/api/echo", "name=Ana"

// URLSearchParams parses the query string:
const query = new URLSearchParams(queryString);
query.get("name"); // "Ana"
```

### Routing by hand

```js
if (path === "/") {
  // home
} else if (path === "/about") {
  // about
} else {
  // 404
}
```

That's all a router is — an `if/else` chain on the path. In Lesson 9, Express will do this for us.

### Sending JSON

```js
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ time: new Date().toISOString() }));
```

The `Content-Type` header tells the client how to interpret the body. Always set it.

---

## 📂 Run the example

```bash
node examples/01-hello-server.js
```

Then visit <http://localhost:3000>. Stop with `Ctrl + C`.

---

## ✏️ Exercise — Mini server (`exercises/mini-server.js`)

Build a server on port 3000 with these routes:

| Route | Response |
|-------|----------|
| `GET /` | `Welcome to the mini server! Try /about or /api/time` |
| `GET /about` | `This server was built in Lesson 8 — no frameworks!` |
| `GET /api/time` | JSON: `{ "time": "2026-…" }` |
| `GET /api/echo?name=Ana` | JSON: `{ "message": "Hello, Ana!" }` |
| anything else | status **404**, JSON: `{ "error": "Not found" }` |

Steps:

1. Create the server and log every request: `` console.log(`${req.method} ${req.url}`) ``
2. Split `req.url` into path and query string.
3. Use `if / else if / else` to choose the response.
4. Set the right `Content-Type` (`text/plain` or `application/json`).
5. End every response with `res.end(...)`.

Bonus:
- `GET /api/echo` with **no** name → `Hello, stranger!`
- `GET /api/add?a=2&b=3` → `{ "sum": 5 }`

Compare with `solutions/mini-server.js` after trying.

**Challenge:** add a `/health` route that returns `{ "status": "ok" }` and test it in the browser.

---

## 🧠 Quiz

1. What's the difference between a request and a response?
2. Which method should you use to create something — `GET` or `POST`?
3. What does status `404` mean? `500`?
4. What header tells the client it's receiving JSON?
5. What is a port? What does `localhost:3000` mean?

<details>
<summary>Show answers</summary>

1. The **request** is what the client asks for; the **response** is what the server sends back.
2. `POST` — `GET` is for reading.
3. `404` = not found (the client asked for something that doesn't exist); `500` = the server hit an internal error.
4. `Content-Type: application/json`.
5. A port is a numbered channel on a machine. `localhost:3000` = this computer, port 3000.

</details>

---

## ✅ Checklist

- [ ] I ran the example server and visited it in the browser
- [ ] I watched requests being logged in the terminal
- [ ] I built all four routes in the mini server
- [ ] My 404 route works
- [ ] I tried at least one bonus route
- [ ] I know how to stop a server (`Ctrl + C`)

**Next:** Lesson 9 — Express.js →
