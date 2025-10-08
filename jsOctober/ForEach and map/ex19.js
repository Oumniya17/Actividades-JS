console.log("\nExercise 19: map + forEach combination");
// First use map to get salaries, then use forEach to sum them
const allSalaries = employees.map(e => e.salary);
console.log("Salaries are:", allSalaries);

let total = 0;
allSalaries.forEach(s => total += s);
// Test data:
console.log("The total sum of salaries is:", total);
// Salaries: 1200, 1500
// Should print:
// Salaries are: [1200,1500]
// The total sum of salaries is: 2700