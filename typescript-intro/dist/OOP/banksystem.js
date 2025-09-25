// Bank System using OOP concepts
const banksystem = () => {
    // Base Account class
    class Account {
        // readonly ensures accountNumber can't be changed after creation
        accountNumber;
        accountHolder;
        balance;
        constructor(accountNumber, accountHolder, initialBalance) {
            this.accountNumber = accountNumber;
            this.accountHolder = accountHolder;
            this.balance = initialBalance;
        }
        deposit(amount) {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Deposited ${amount} to ${this.accountHolder}'s account.`);
            }
            else {
                console.log("Deposit amount must be positive.");
            }
        }
        getBalance() {
            return this.balance;
        }
        getAccountHolder() {
            return this.accountHolder;
        }
        displayDetails() {
            console.log(`Account Number: ${this.accountNumber}`);
            console.log(`Account Holder: ${this.accountHolder}`);
            console.log(`Balance: ${this.balance}`);
        }
    }
    // SavingsAccount with interest
    class SavingsAccount extends Account {
        interestRate;
        constructor(accountNumber, accountHolder, initialBalance, interestRate) {
            super(accountNumber, accountHolder, initialBalance);
            this.interestRate = interestRate;
        }
        addInterest() {
            const interest = this.balance * this.interestRate;
            this.balance += interest;
            console.log(`Interest of ${interest} added to ${this.getAccountHolder()}'s account.`);
        }
        withdraw(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew ${amount} from ${this.getAccountHolder()}'s account.`);
            }
            else {
                console.log("Insufficient balance or invalid amount.");
            }
        }
        displayDetails() {
            super.displayDetails();
            console.log(`Interest Rate: ${this.interestRate * 100}%`);
        }
    }
    // CurrentAccount with overdraft
    class CurrentAccount extends Account {
        overdraftLimit;
        constructor(accountNumber, accountHolder, initialBalance, overdraftLimit) {
            super(accountNumber, accountHolder, initialBalance);
            this.overdraftLimit = overdraftLimit;
        }
        withdraw(amount) {
            if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
                this.balance -= amount;
                console.log(`Withdrew ${amount} from ${this.getAccountHolder()}'s account.`);
            }
            else {
                console.log("Overdraft limit exceeded or invalid amount.");
            }
        }
        displayDetails() {
            super.displayDetails();
            console.log(`Overdraft Limit: ${this.overdraftLimit}`);
        }
    }
    // Polymorphic function to print details of any account
    function printAccountDetails(accounts) {
        for (const acc of accounts) {
            acc.displayDetails();
            console.log('-------------------');
        }
    }
    // Demo
    const savings = new SavingsAccount(1001, "Alice", 5000, 0.05);
    const current = new CurrentAccount(2001, "Bob", 2000, 1000);
    console.log("Initial Details:");
    printAccountDetails([savings, current]);
    savings.deposit(1000);
    savings.withdraw(2000);
    savings.addInterest();
    current.deposit(500);
    current.withdraw(3000); // Uses overdraft
    console.log("\nAfter Transactions:");
    printAccountDetails([savings, current]);
};
export default banksystem;
//# sourceMappingURL=banksystem.js.map