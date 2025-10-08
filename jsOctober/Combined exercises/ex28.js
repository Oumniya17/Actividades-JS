console.log("\nExercise 28: conditional + loop");
// Create function 'printMultiples' that receives n and limit and prints multiples of n
function printMultiples(n, limit) {
  for (let i = n; i <= limit; i += n) {
    console.log(i);
  }
}
// Test data:
printMultiples(3,15);
// Should print: 3 6 9 12 15