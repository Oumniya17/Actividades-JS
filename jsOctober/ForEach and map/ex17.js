console.log("\nExercise 17: map with strings");
// Use map to create a new array with each word in uppercase
const words = ['hello', 'world', 'js'];
const uppercaseWords = words.map(w => w.toUpperCase());
// Test data:
console.log(uppercaseWords);
// Should display: ['HELLO', 'WORLD', 'JS']