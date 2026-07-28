const deck = ["K de copas", "7 de pals", "Ás de copas", "3 de zap"]
let option
do {
    let cards = ""
    for (let i = 0; i < deck.length; i++) {
        cards += i + "º " + deck[i] + "\n"
    }

    option = prompt("Good morning, please choose an option to continue:" +

        "\n1)Add a card to the deck" +

        "\n2)Remove a card from the deck" +

        "\n3)Leave the game" +

        "\n\nHow many cards are in the deck: " + deck.length)


    switch (option) {
        case "1":
            deck.push(prompt("Please enter your name here to join the waiting list"))
            break;

        case "2":
            if (deck.length >= 1) {

                const random = Math.floor(Math.random() * deck.length)
                const pulled = deck.splice(random, 1)
                alert(pulled + " was pulled")

            } else {
                alert("There are no more cards in the deck, choose option 1 to add more")
            }
            break;

        case "3":
            alert("You chose to leave")
            break;

        default:
            alert("please, try again")
    }



} while (option !== "3")