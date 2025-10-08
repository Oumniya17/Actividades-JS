console.log("\nExercise 22: default parameters");
// Create function 'multiplyBy' with default factor = 2
function multiplyBy(num, factor = 2) {
  return num * factor;
}
// Test data:
console.log(multiplyBy(5));    // Should display: 10
console.log(multiplyBy(5,3));  // Should display: 15