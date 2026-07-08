
let amount = parseFloat(prompt("How much money do you have?"));
let numbers = "0"
let add = 0
let subtraction = 0
do {
    alert("You have " + amount + " dollars")
    numbers = prompt("Choose an option if you want to add or remove any amount\n" +
        "1 - add\n2 - Withdraw\n3 - Close consultation"
    )

    switch (numbers) {
        case "1":
            alert("You chose to add a value");
            add = parseFloat(prompt("Please inform the value"))
            amount += add
            break;
        case "2":
            alert("You chose to withdraw an amount");
            subtraction = parseFloat(prompt("Please inform the value"))
            amount -= subtraction
            break;
        case "3":
            alert("Your inquiry is being closed...");
            break;
        default:
            alert("Your choice is incorrect, choose again")
    }


} while (numbers !== "3");