console.log("\nExercise 21: methods");
// Create object 'bank' with methods deposit, withdraw, and checkBalance
const bank = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  },
  checkBalance() {
    return this.balance;
  }
};
// Test data:
console.log(bank.deposit(500)); // Should display: 1500
console.log(bank.withdraw(200));// Should display: 1300
console.log(bank.checkBalance());// Should display: 1300