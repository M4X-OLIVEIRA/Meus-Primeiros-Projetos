
let stop = true

alert("Good morning, choose a number from 1 to 4 if you want to stop, choose number 5")


do {
    let numbers = parseInt(prompt("Choice a number\nA) 1\nB) 2\nC) 3\nD) 4\nE) 5"))

    switch (numbers) {
        case 1:
            alert("You chose number one");
            break;
        case 2:
            alert("You chose number two");
            break;
        case 3:
            alert("You chose number three");
            break;
        case 4:
            alert("You chose number four");
            break;
        case 5:
            alert("You chose number five");
            stop = false
            break;
        default:
            alert("Your choice is incorrect, choose again")
    }
} while (stop === true);

alert("The program will be terminated")