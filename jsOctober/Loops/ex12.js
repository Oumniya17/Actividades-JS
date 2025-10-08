console.log("\nExercise 12: while loop (factorial)");
// Write a function called 'factorial' that receives a number n and returns its factorial using while
function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}
// Test data:
console.log(factorial(5)); // Should display: 120