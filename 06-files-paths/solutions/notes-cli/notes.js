// ============================================================
// LESSON 6 · SOLUTION — Notes CLI
// Run with:
//   node notes.js add "Buy milk"
//   node notes.js list
//   node notes.js delete 1
// ============================================================

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "data", "notes.json");

// ---- Helper: load notes from disk ----
function loadNotes() {
  // First run: the file doesn't exist yet.
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }

  try {
    const text = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(text);
  } catch (error) {
    // If the file is corrupted, don't crash — warn and start fresh.
    console.error("Could not read notes file:", error.message);
    return [];
  }
}

// ---- Helper: save notes to disk ----
function saveNotes(notes) {
  // Ensure the data folder exists before writing into it.
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });

  // Pretty-print with 2 spaces so the file is human-readable.
  fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
}

// ---- Commands ----
const command = process.argv[2];
const notes = loadNotes();

if (command === "add") {
  const text = process.argv[3];

  if (!text) {
    console.error('Usage: node notes.js add "your note"');
    process.exit(1);
  }

  // New id = last note's id + 1 (or 1 if the list is empty).
  const id = notes.length === 0 ? 1 : notes[notes.length - 1].id + 1;

  notes.push({
    id,
    text,
    createdAt: new Date().toISOString(),
  });

  saveNotes(notes);
  console.log(`Added note #${id}: ${text}`);
} else if (command === "list") {
  if (notes.length === 0) {
    console.log('No notes yet. Add one with: node notes.js add "..."');
  } else {
    notes.forEach((note) => console.log(`${note.id}. ${note.text}`));
  }
} else if (command === "delete") {
  const id = Number(process.argv[3]);

  // filter keeps every note EXCEPT the one with this id.
  const remaining = notes.filter((note) => note.id !== id);

  if (remaining.length === notes.length) {
    // Nothing was removed → the id didn't exist.
    console.error(`Note #${id} not found.`);
    process.exit(1);
  }

  saveNotes(remaining);
  console.log(`Deleted note #${id}.`);
} else {
  console.log("Usage:");
  console.log('  node notes.js add "Buy milk"');
  console.log("  node notes.js list");
  console.log("  node notes.js delete <id>");
}
