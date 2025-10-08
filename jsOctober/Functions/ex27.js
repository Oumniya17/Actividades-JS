console.log("\nExercise 27: closure with initial value");
// Create function 'counterFrom' that starts from a given number
function counterFrom(start) {
  let count = start;
  return function() {
    count++;
    return count;
  };
}
const countFrom5 = counterFrom(5);
// Test data:
console.log(countFrom5()); // Should display: 6
console.log(countFrom5()); // Should display: 7