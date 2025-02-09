"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
// 1. TransactionType enum for deposit and withdrawal types.
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Deposit"] = 0] = "Deposit";
    TransactionType[TransactionType["Withdraw"] = 1] = "Withdraw";
})(TransactionType || (TransactionType = {}));
// Array to store all bank accounts.
var accounts = [];
// 1. Create an account function
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive) {
    if (isActive === void 0) { isActive = true; }
    var newAccount = {
        accountNo: accountNo,
        firstname: firstname,
        lastname: lastname,
        balance: initialDeposit,
        isActive: isActive,
        transactions: []
    };
    accounts.push(newAccount);
    return newAccount;
}
// 2. Process transaction (deposit/withdraw)
function processTransaction(accountNo, amount, transactionType) {
    var account = findAccount(accountNo);
    if (!account)
        return "Account not found";
    if (!account.isActive)
        return "Account is inactive";
    if (transactionType === TransactionType.Withdraw) {
        if (amount > account.balance)
            return "Insufficient funds for withdrawal";
        account.balance -= amount;
    }
    else {
        account.balance += amount;
    }
    account.transactions.push({ accountNo: accountNo, amount: amount, type: transactionType });
    return amount + " " + (transactionType === TransactionType.Deposit ? "deposited into" : "withdrawn from") + " account number " + accountNo;
}
// 3. Get account balance
function getBalance(accountNo) {
    var account = findAccount(accountNo);
    return account ? account.balance : "Account not found";
}
// 4. Get transaction history
function getTransactionHistory(accountNo) {
    var account = findAccount(accountNo);
    return account ? account.transactions : "Account not found";
}
// 5. Check if the account is active
function checkActiveStatus(accountNo) {
    var account = findAccount(accountNo);
    return account ? account.isActive : "Account not found";
}
// 6. Close account
function closeAccount(accountNo) {
    var index = findAccountIndex(accountNo);
    if (index === -1)
        return "Account not found";
    accounts.splice(index, 1);
    return "Account number " + accountNo + " closed";
}
// Helper function to find an account by account number
function findAccount(accountNo) {
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNo === accountNo) {
            return accounts[i];
        }
    }
    return undefined;
}
// Helper function to find an account index by account number
function findAccountIndex(accountNo) {
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNo === accountNo) {
            return i;
        }
    }
    return -1;
}
// Test cases
console.log(createAccount(1, "John", "Smith", 100));
console.log(processTransaction(1, 50, TransactionType.Deposit));
console.log(processTransaction(1, 20, TransactionType.Withdraw));
console.log(processTransaction(1, 500, TransactionType.Withdraw));
console.log(getBalance(1));
console.log(getTransactionHistory(1));
console.log(checkActiveStatus(1));
console.log(closeAccount(1));
console.log(getBalance(1)); // Should return "Account not found"
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
