let value1 = 0
let value2 = 0
let value3 = 0
let option = ""

function triangle() {
    value1 = prompt("What is the base value?")
    value2 = prompt("What is the height value?")
    return alert("The result is " + value1 * (value2 / 2));
}
function rectangle() {
    value1 = prompt("What is the base value?")
    value2 = prompt("What is the height value?")
    return alert("The result is " + value1 * value2);
}
function square() {
    value1 = prompt("What is the value of one side?")
    return alert("The result is " + value1 * value1);
}
function trapeze() {
    value1 = parseFloat(prompt("What is the value of the largest base?"))
    value2 = parseFloat(prompt("What is the value of the smallest base?"))
    value3 = parseFloat(prompt("What is the height value?"))
    return alert("The result is " + (value1 + value2) * (value3 / 2));
}
function circle() {
    value1 = prompt("What is the value of the radius?")
    return alert("The result is " + 3.14 * (value1 * value1));
}

do {
    option = prompt("Good morning, please choose an option for the area you want to calculate below." +
        "\n\n1 - Triangle" +
        "\n2 - Rectangle" +
        "\n3 - Square" +
        "\n4 - Trapeze" +
        "\n5 - Circle" +
        "\n6 - Exit the program")

    switch (option) {
        case "1":
            triangle()
            break;
        case "2":
            rectangle()
            break;
        case "3":
            square()
            break;
        case "4":
            trapeze()
            break;
        case "5":
            circle()
            break;
        case "6":
            alert("Closing the program...")
            break;
        default:
            alert("Incorrect answer, please try again")

    }

} while (option !== "6")

