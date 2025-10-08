console.log("\nExercise 4: switch");
// Write a function called 'getColor' that receives a number 1-3 and returns: 1 → 'Red', 2 → 'Green', 3 → 'Blue', other → 'Unknown color'
function getColor(num) {
  switch (num) {
    case 1: return 'Red';
    case 2: return 'Green';
    case 3: return 'Blue';
    default: return 'Unknown color';
  }
}
// Test data:
console.log(getColor(1)); // Should display: 'Red'
console.log(getColor(3)); // Should display: 'Blue'
console.log(getColor(5)); // Should display: 'Unknown color'