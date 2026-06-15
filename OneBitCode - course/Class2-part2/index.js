let attack = 0;
let defense = 0;


attack = parseFloat(prompt("Enter the damage value"));
defense = parseFloat(prompt("Enter defense value"));
let shield = confirm("Do you have a shield ?");



if (attack > defense) {
    if (shield == false) {
        alert("Total damage was " + (attack - defense + " life points"))
    } else if (shield == true) {
        alert("The opponent defended his attack but took " + ((attack - defense) / 2) + " damage")
    }
} else if (attack <= defense) {
    alert("The opponent had defended the attack, you caused " + 0 + " damage")
}
