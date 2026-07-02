let tourist = ""
let loop = ""
let cities = []

tourist = prompt("Good morning, what's your name ?");
loop = prompt("Have you visited any city before?\n\n1) Yes\n2) No");

while (loop == "yes") {

    cities.push(prompt("What else ?"))
    loop = prompt("Is the anoteher one ?\n\n1) Yes\n2) No")
}

alert("List of cities " + tourist + " visited:\n\n" + cities.join("\n"))
