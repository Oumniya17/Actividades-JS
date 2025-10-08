console.log("\nExercise 11: for loop (array)");
// Write a function called 'multiplyArray' that receives an array of numbers and returns the product of all elements
function multiplyArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
// Test data:
console.log(multiplyArray([1, 2, 3, 4])); // Should display: 24