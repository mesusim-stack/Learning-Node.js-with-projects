// ============================================================
// LESSON 2 · SOLUTION — Temperature converter
// Run with:  node solutions/temperature.js
// ============================================================

// Part 1 — the conversion function.
// `celsius` is the parameter; the formula result is RETURNED.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Part 2 — print a table for a few values.
// `for...of` visits each number in the list one by one.
const temperatures = [0, 20, 37, 100];
for (const c of temperatures) {
  const f = celsiusToFahrenheit(c);
  // .toFixed(1) rounds to 1 decimal place; note it returns a STRING.
  console.log(`${c}°C = ${f.toFixed(1)}°F`);
}

// Part 3 (bonus) — the reverse conversion.
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("98.6°F =", fahrenheitToCelsius(98.6).toFixed(1), "°C");
