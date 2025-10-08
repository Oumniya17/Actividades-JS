console.log("\nExercise 30: object + map + function");
// Create function 'averageAge' that returns the average age from an array of people
const group = [
  { name: 'Ana', age: 25 },
  { name: 'John', age: 30 },
  { name: 'Mary', age: 30 },
];
function averageAge(people) {
  const total = people.map(p => p.age).reduce((a,b) => a + b, 0);
  return total / people.length;
}
// Test data:
console.log(averageAge(group)); // Should display: 28.333333333333332