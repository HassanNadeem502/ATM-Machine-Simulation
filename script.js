// ==============================
// ATM Machine Simulation
// ==============================

// Default PIN and Balance
var correctPin = "1234";   // ATM PIN
var balance = 10000;       // Starting balance

// Ask user to enter PIN
var enteredPin = prompt("Enter your 4-digit PIN:");

// Check if PIN is correct
if (enteredPin === correctPin) {

    console.log("Login Successful ✅");

    var choice = "";

    // Main ATM Loop
    while (choice !== "4") {

        console.log("------ ATM MENU ------");
        console.log("1. Check Balance");
        console.log("2. Deposit Money");
        console.log("3. Withdraw Money");
        console.log("4. Exit");

        // Ask user for menu choice
        choice = prompt("Enter your choice (1-4):");

        // Option 1: Check Balance
        if (choice === "1") {
            console.log("Your Current Balance is: " + balance);
        }

        // Option 2: Deposit
        else if (choice === "2") {
            var depositAmount = +prompt("Enter amount to deposit:");

            if (depositAmount > 0) {
                balance = balance + depositAmount;
                console.log("Deposit Successful ✅");
                console.log("Updated Balance: " + balance);
            } else {
                console.log("Invalid Amount ❌");
            }
        }

        // Option 3: Withdraw
        else if (choice === "3") {
            var withdrawAmount = +prompt("Enter amount to withdraw:");

            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance = balance - withdrawAmount;
                console.log("Withdrawal Successful ✅");
                console.log("Remaining Balance: " + balance);
            } else {
                console.log("Insufficient Balance or Invalid Amount ❌");
            }
        }

        // Option 4: Exit
        else if (choice === "4") {
            console.log("Thank you for using ATM 🙏");
        }

        // Invalid Option
        else {
            console.log("Invalid Choice ❌ Try Again.");
        }
    }

} else {
    console.log("Incorrect PIN ❌ Access Denied.");
}

console.log("Program Ended.");
