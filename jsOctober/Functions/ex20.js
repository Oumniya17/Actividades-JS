console.log("\nExercise 20: function types");
// Create declarative function 'subtract' and expression function 'modulo'
function subtract(a, b) {
  return a - b;
}
const modulo = function(a, b) {
  return a % b;
};
// Test data:
console.log(subtract(10,3)); // Should display: 7
console.log(modulo(10,3));   // Should display: 1