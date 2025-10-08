console.log("\nExercise 5: ternary");
// Write a function called 'isPositive' that receives a number and returns 'Positive' if ≥0, 'Negative' if <0
function isPositive(num) {
  return num >= 0 ? 'Positive' : 'Negative';
}
// Test data:
console.log(isPositive(5));  // Should display: 'Positive'
console.log(isPositive(-3)); // Should display: 'Negative'