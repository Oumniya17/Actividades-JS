console.log("\nExercise 9: while loop");
// Write a function called 'countOdds' that counts from 1 to n only odd numbers
function countOdds(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i += 2;
  }
}
// Test data:
countOdds(10);
// Should print: 1 3 5 7 9