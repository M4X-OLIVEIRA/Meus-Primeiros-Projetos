
const register = [];

register[0] = prompt("What's your first name ?");
register[1] = prompt("What's your second name ?");
register[2] = prompt("What's yor field of study ?");
register[3] = parseInt(prompt("What year were you born ?"));

user = "Name: " + register[0] + " " + register[1] + "\nField of study: " + register[2] + "\nAge: " + (2026 - register[3]);

alert(user);