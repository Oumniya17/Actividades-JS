console.log("\nExercise 26: simple closure");
// Create function 'idGenerator' that returns incremental IDs
function idGenerator() {
  let id = 0;
  return function() {
    id++;
    return id;
  };
}
const newID = idGenerator();
// Test data:
console.log(newID()); // Should display: 1
console.log(newID()); // Should display: 2
console.log(newID()); // Should display: 3