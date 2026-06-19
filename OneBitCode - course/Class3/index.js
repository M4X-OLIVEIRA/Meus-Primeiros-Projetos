let meters = parseFloat(prompt("Enter the value in meters you want to convert"));
let measure = parseInt(prompt("What measurement do you want to convert this value to ?" +
    "\n\n1- millimeter (MM)" +
    "\n2- centimeteris (CM)" +
    "\n3- decimeteris (DM)" +
    "\n4- decameter (DAM)" +
    "\n5- hectometer (HM)" +
    "\n6- kilometer (KM)"))

switch (measure) {
    case 1:
        alert(meters + " meters convert to millimeter is " + (meters * 1000) + " (mm)")
        break
    case 2:
        alert(meters + " meters convert to centimeteris " + (meters * 100) + " (cm)")
        break
    case 3:
        alert(meters + " meters convert to decimeteris " + (meters * 10) + " (dm) ")
        break
    case 4:
        alert(meters + " meters convert to decameter is " + (meters / 10) + " (dam)")
        break
    case 5:
        alert(meters + " meters convert to hectometer is " + (meters / 100) + " (hm)")
        break
    case 6:
        alert(meters + " meters convert to kilometer is " + (meters / 1000) + " (km)")
        break
    default:
        alert("Please select a valid option")

}
