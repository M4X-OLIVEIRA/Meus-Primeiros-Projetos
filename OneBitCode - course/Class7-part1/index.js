const list = ["Zzz", "Thiago", " Gabriel", " Paulo"]
let option
do {
    let patients = ""
    for (let i = 1; i < list.length; i++) {
        patients += i + "º " + list[i] + "\n"
    }

    option = prompt("Good morning, please choose an option to continue your service:" +

        "\n1) Enter your name to be added to the waiting list" +

        '\n2)"Doctor is calling a patient to be seen"' +

        "\n3)Exit the menu" +
        "\n\nPatients list:\n" + patients)


    switch (option) {
        case "1":
            list.push(prompt("Please enter your name here to join the waiting list"))
            break;

        case "2":
            if (list.length > 1) {
                alert(list[1] + " please come to the doctor's office")
                list.shift(1)

            } else {
                alert("All patients on the waiting list were treated")
            }
            break;

        case "3":
            alert("You chose to leave")
            break;

        default:
            alert("please, try again")
    }



} while (option !== "3")