console.log("\nExercise 29: array + conditional");
// Create function 'filterEvens' that returns only even numbers from an array
function filterEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}
// Test data:
console.log(filterEvens([1,2,3,4,5,6])); // Should display: [2,4,6]