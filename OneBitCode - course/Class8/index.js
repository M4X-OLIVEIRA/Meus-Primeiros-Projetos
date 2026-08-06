let property = []
let registrations = ""
let option = ""



do {
    option = prompt("Good morning, please choose the number from one of the options below:\n\n" +
        "Number of registered properties: " + property.length +
        "\n1 - Add a property" +
        "\n2 - View available properties" +
        "\n3 - Exit the app"
    )

    switch (option) {
        case "1":
            alert("To add a property, please answer the following questions below")
            property.push({
                name: prompt("Owner's name?"),
                rooms: prompt("How many rooms do you have?"),
                bathrooms: prompt("How many bathrooms are there?"),
                garage: confirm("Do you have a garage?")
            })
            break
        case "2":

            if (property.length > 0) {
                alert("Properties available for purchase or rent:\n")

                registrations = ""

                for (let i = 0; i < property.length; i++) {

                    registrations += "Owner name: " + property[i].name +
                        "\nRooms in the house: " + property[i].rooms +
                        "\nBathrooms: " + property[i].bathrooms +
                        "\nDoes the house have a garage? " + property[i].garage + "\n\n"
                }
                alert(registrations)
            } else {
                alert("We do not yet have properties registered in our database")
            }



            break
        case "3":
            alert("Closing services...")
            break
        default:
            alert("Option invalid, please choose again")
    }

} while (option !== "3")