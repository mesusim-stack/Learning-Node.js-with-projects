// ============================================================
// LESSON 1 · SOLUTION — Number Guessing Game (one shot)
// Run with:  node solutions/guess-game.js
// ============================================================

// STEP 1 — const because the secret never changes during a run.
const secret = 7;

// STEP 2 — let because we change the guess while experimenting.
let guess = 5; // 👈 change me: try 5, 7 and 10

// STEP 3 — Show what we're working with (helpful for debugging).
console.log(`Secret: ${secret} | Guess: ${guess}`);

// STEP 4 — Compare the numbers.
if (guess < secret) {
  // This branch runs when the guess is below the secret.
  console.log("Too low! 📉");
} else if (guess > secret) {
  // This branch runs when the guess is above the secret.
  console.log("Too high! 📈");
} else {
  // If it's neither lower nor higher, it must be equal.
  console.log("You got it! 🎉");
}

// ⚠️ Edge case: if `guess` were the text "seven", both comparisons would be
// false and the program would wrongly print "You got it!". In Lesson 2 we'll
// learn to work with numbers properly so this can't happen.
