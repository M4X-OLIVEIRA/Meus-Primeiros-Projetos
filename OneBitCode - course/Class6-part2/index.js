
let loop = true
alert("Is your word a palindrome ?");

do {
    let word = prompt("Put your word here");
    let inverted = ""


    for (let i = word.length - 1; i >= 0; i--) {

        inverted += word[i];
    }

    if (inverted == word) {
        alert("Congratulation, your word is a palindrome!")
        loop = false
    } else {
        alert("Sorry, your word is not a palindrome. Try again")
    }


} while (loop == true)