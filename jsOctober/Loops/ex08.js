console.log("\nExercise 8: for loop (sum)");
// Write a function called 'sumEvens' that sums all even numbers up to n
function sumEvens(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
// Test data:
console.log(sumEvens(10)); // Should display: 30