console.log("\nExercise 2: if-else");
// Write a function called 'checkTemperature' that receives a temperature (°C) and returns 'Hot' if ≥30, 'Cold' if <30.
function checkTemperature(temp) {
  if (temp >= 30) return 'Hot';
  else return 'Cold';
}
// Test data:
console.log(checkTemperature(32)); // Should display: 'Hot'
console.log(checkTemperature(20)); // Should display: 'Cold'
