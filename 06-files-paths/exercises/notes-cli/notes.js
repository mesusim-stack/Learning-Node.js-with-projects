// ============================================================
// LESSON 6 · EXERCISE — Notes CLI
// Run with:
//   node notes.js add "Buy milk"
//   node notes.js list
//   node notes.js delete 1
//
// Notes are saved to data/notes.json so they survive between runs.
// ============================================================

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "data", "notes.json");

// ---- Helper: load notes from disk ----
function loadNotes() {
  // TODO 1 — if the data folder/file doesn't exist yet, return []
  //          Hint: fs.existsSync(DATA_FILE)
  // TODO 2 — read the file with readFileSync(..., "utf8") and JSON.parse it
  //          Wrap the parse in try/catch in case the file is corrupted
}

// ---- Helper: save notes to disk ----
function saveNotes(notes) {
  // TODO 3 — make sure the data folder exists (mkdirSync recursive: true)
  // TODO 4 — JSON.stringify(notes, null, 2) and writeFileSync it
}

// ---- Commands ----
const command = process.argv[2]; // "add" | "list" | "delete"

// TODO 5 — handle "add": take the text from argv[3], push { id, text } to notes, save
//          Give the new note an id one higher than the last one.

// TODO 6 — handle "list": print each note like "1. Buy milk"

// TODO 7 — handle "delete": take the id from argv[3], remove that note, save
//          Hint: notes.filter((note) => note.id !== id)

// TODO 8 — if the command is unknown: print usage
