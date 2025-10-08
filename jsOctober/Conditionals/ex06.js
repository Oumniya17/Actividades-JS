console.log("\nExercise 6: combined conditionals");
// Write a function called 'canVote' that receives age and nationality ('yes'/'no') and returns true if age ≥18 and nationality 'yes', false otherwise
function canVote(age, nationality) {
  return age >= 18 && nationality === 'yes';
}
// Test data:
console.log(canVote(20, 'yes'));  // Should display: true
console.log(canVote(16, 'yes'));  // Should display: false
console.log(canVote(25, 'no'));   // Should display: false