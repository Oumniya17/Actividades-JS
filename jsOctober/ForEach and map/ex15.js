console.log("\nExercise 15: forEach with objects");
// Use forEach to print each employee's name and salary in the 'employees' array
// Test data:
const employees = [
  { name: 'Luis', salary: 1200 },
  { name: 'Eva', salary: 1500 },
];
employees.forEach(e => console.log(`${e.name} earns ${e.salary} euros`));
// Should print:
// Luis earns 1200 euros
// Eva earns 1500 euros