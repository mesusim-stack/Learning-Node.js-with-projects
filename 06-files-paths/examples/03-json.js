// ============================================================
// LESSON 6 · FILE 3 — json.js
// Run with:  node examples/03-json.js
// ============================================================

const fs = require("fs");
const path = require("path");

const userFile = path.join(__dirname, "data", "user.json");

// 1. Read the JSON file as TEXT.
const text = fs.readFileSync(userFile, "utf8");

// 2. Convert text → JavaScript object with JSON.parse.
const user = JSON.parse(text);
console.log("Name:", user.name);
console.log("Hobbies:", user.hobbies.join(", "));

// 3. Change the object like any other object.
user.hobbies.push("coding");
user.lastLogin = new Date().toISOString(); // date/time as text

// 4. Convert object → text with JSON.stringify.
//    The `2` means "indent with 2 spaces" so humans can read it.
const updatedText = JSON.stringify(user, null, 2);

// 5. Save it — to a NEW file, so the original stays clean.
const outputDir = path.join(__dirname, "output");
const outFile = path.join(outputDir, "user-updated.json");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outFile, updatedText);

console.log("Updated user saved to:", outFile);
console.log(updatedText);

// ---- TRY THIS ----
// 1. Add a "favoriteColor" property to the user before saving.
// 2. Run the script twice. Does the original user.json ever change? No —
//    we only read it. Only the output file is written.
// 3. Remove a closing } from user.json and run again to see JSON.parse fail.
