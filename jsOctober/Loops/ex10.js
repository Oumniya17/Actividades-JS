console.log("\nExercise 10: do-while loop");
// Write a function called 'askPassword' that simulates asking for a password until 'admin' is entered using an array of attempts
function askPassword(attempts) {
  let i = 0;
  let password;
  do {
    password = attempts[i];
    console.log(`Attempt ${i + 1}: ${password}`);
    i++;
  } while (password !== 'admin' && i < attempts.length);

  if (password === 'admin') console.log('Correct password!');
}
// Test data:
const attempts = ['1234', 'qwerty', 'admin'];
askPassword(attempts);
// Example output:
// Attempt 1: 1234
// Attempt 2: qwerty
// Attempt 3: admin
// Correct password!