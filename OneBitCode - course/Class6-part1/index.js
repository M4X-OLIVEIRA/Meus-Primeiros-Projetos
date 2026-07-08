
alert("Welcome my friend, this is a multiplication table robot from 1 to 20")
let number = parseInt(prompt("Put in your number to be multiplied"))
let result = ""
let multiplication = ""

for (let i = 0; i <= 20; i++) {
    result = number * i;

    multiplication += "\n" + number + " x " + i + " = " + result;
}

alert("Multiplication table " + number + " from 1 to 20\n" + multiplication);