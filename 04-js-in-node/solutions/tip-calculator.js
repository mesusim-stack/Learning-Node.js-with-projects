// ============================================================
// LESSON 4 · SOLUTION B — Tip calculator
// Run with:  node solutions/tip-calculator.js 50 15
//            node solutions/tip-calculator.js 50
// ============================================================

// Number(...) turns command-line text into a real number.
const bill = Number(process.argv[2]);

// BONUS — if no percent was given, default to 10.
const percentArg = process.argv[3];
const percent = percentArg === undefined ? 10 : Number(percentArg);

// Validate everything before calculating.
// || means "or" — if ANY of these problems is true, we stop.
if (
  Number.isNaN(bill) ||
  bill <= 0 ||
  Number.isNaN(percent) ||
  percent < 0
) {
  console.error("Usage: node tip-calculator.js <bill> [tipPercent]");
  console.error("Example: node tip-calculator.js 50 15");
  process.exit(1);
}

// Math: percent is "per 100", so 15% = 15 / 100.
const tip = (bill * percent) / 100;
const total = bill + tip;

// toFixed(2) formats a number with exactly 2 decimal places (as a string).
console.log(`Bill: $${bill.toFixed(2)}`);
console.log(`Tip (${percent}%): $${tip.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
