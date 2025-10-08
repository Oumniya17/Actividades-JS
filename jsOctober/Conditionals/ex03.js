console.log("\nExercise 3: if-else if");
// Write a function called 'classifyAge' that receives an age and returns:
// 'Child' if ≤12, 'Teen' if 13-17, 'Adult' if 18-64, 'Senior' if ≥65
function classifyAge(age) {
  if (age <= 12) return 'Child';
  else if (age <= 17) return 'Teen';
  else if (age <= 64) return 'Adult';
  else return 'Senior';
}
// Test data:
console.log(classifyAge(10)); // Should display: 'Child'
console.log(classifyAge(15)); // Should display: 'Teen'
console.log(classifyAge(30)); // Should display: 'Adult'
console.log(classifyAge(70)); // Should display: 'Senior'