const speed = [];

speed[0] = parseInt(prompt("Put the speed of the first car"));
speed[1] = parseInt(prompt("Put the speed of the second car"));

if (speed[0] > speed[1]) {
    alert("The first car is more faster")
} else if (speed[1] > speed[0]) {
    alert("The second car is more faster")
} else if (speed[0] === speed[1]) {
    alert("Cars have the same speed you ass")
}