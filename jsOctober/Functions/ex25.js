console.log("\nExercise 25: functions as arguments");
// Create function 'applyAdvancedOperation' that receives two numbers and a function
function multiply(a, b) { return a * b; }
function applyAdvancedOperation(a, b, operation) {
  return operation(a, b);
}
// Test data:
console.log(applyAdvancedOperation(3,4,multiply)); // Should display: 12