const list = []
let vacancies = []
let Registration = []
let option = ""


function availableVacancies() {
    let result = ""
    vacancies.forEach(function (vacancy, i) {
        result += ++i + " - " + vacancy.name + "\n" + "Subscribed: " + vacancy.candidates.length + "\n" + "Deadline " + vacancy.date + "\n" + vacancy.description + "\n\n"
    })
    alert("List of available vacancies:\n\n" + result)
}

function addVacancy() {
    let vacancy = {}
    vacancy.name = prompt("What is the name of the vacancy you want to add?")
    vacancy.description = prompt("Provide a brief description of the position.")
    vacancy.candidates = []
    let data = prompt("Set a deadline for registration")
    vacancy.date = data.slice(0, 2) + "/" + data.slice(2, 4) + "/" + data.slice(4, 8)
    let save = confirm("Please confirm that you really want to save the data described below:\n\n" +
        vacancy.name + "\n" +
        vacancy.description + "\n" +
        vacancy.date)
    if (save) {
        vacancies.push(vacancy)
        alert("Data saved successfully!")
    } else {
        alert("You chose not to save the data, returning to the menu...")
    }

}

function viewVacancies() {
    let choice = Number(prompt("Please select the vacancy number you wish to see information about."))
    let view = vacancies[choice - 1]
    alert(
        choice + " - \n" + "Vacancy: " + view.name + "\n" +
        "Description: " + view.description + "\n" +
        "Deadline: " + view.date + "\n" +
        "Name of registered candidates: " + view.candidates
    )
}

function candidateRegistration() {
    let result = ""
    vacancies.forEach(function (vacancy, i) {
        result += ++i + " - " + vacancy.name + "\n"
    })
    let choice = Number(prompt("According to the vacancies below, choose the number of one to register:\n\n" + result))
    let vacancy = vacancies[choice - 1]
    let candidate = prompt("Candidate's name")
    vacancy.candidates.push(candidate)
    alert("Candidate successfully registered!")
}

function removeCandidate() {
    let choice = Number(prompt("Which vacancy would you like to remove from the list?"))
    alert("Vacancy " + vacancies[choice - 1].name + " successfully removed!")
    vacancies.splice(choice - 1, 1)


}

do {

    option = prompt("Choose a number according to the available options\n\n" +
        "1 - List available vacancies\n" +
        "2 - Create a new vacancy\n" +
        "3 - View a vacancy\n" +
        "4 - Register a candidate for a vacancy\n" +
        "5 - Delete a vacancy\n" +
        "6 - Exit"
    )

    switch (option) {
        case "1":
            availableVacancies()
            break;
        case "2":
            addVacancy()
            break;
        case "3":
            viewVacancies()
            break;
        case "4":
            candidateRegistration()
            break;
        case "5":
            removeCandidate()
            break;
        case "6":
            alert("The program is being finalized...")
            break;
        default:
            alert("Incorrect answer, please try again")

    }


} while (option !== "6");


