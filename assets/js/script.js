// Overall
points = [
    { name: "Charanvir", score: "15" },
    { name: "Gaganvir", score: "18" },
    { name: "Gurvir", score: "7" },
    { name: "Jaskaran", score: "13" },
    { name: "Joe", score: "5" },
    { name: "Manroop", score: "18" },
    { name: "Randeep", score: "19" }
];
let overallStandings = points.sort((a, b) => b.score - a.score);
let overallBody = document.querySelector(".overallBody")
let overallScores = function () {
    counter = 0;
    for (i = 0; i < overallStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = overallStandings[i].name
        teamScore.innerHTML = overallStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(teamScore);
        overallBody.appendChild(row);
    }
};

// Bahrain
bahrain = [
    // Randeep
    { name: "Lewis Hamilton", quali: "11", race: "", score: "11" },
    { name: "Fernando Alonso", quali: "8", race: "", score: "8" },
    // jaskaran
    { name: "Max Verstappen", quali: "14", race: "", score: "14" },
    { name: "Lance Stroll", quali: "-1", race: "", score: "-1" },
    // Manroop
    { name: "Carlos Sainz", quali: "9", race: "", score: "9" },
    { name: "Kevin Magnussen", quali: "9", race: "", score: "9" },
    // Charanvir
    { name: "Charles Leclerc", quali: "15", race: "", score: "15" },
    { name: "Esteban Ocon", quali: "0", race: "", score: "0" },
    // Joe
    { name: "Pierre Gasly", quali: "6", race: "", score: "6" },
    { name: "Daniel Ricciardo", quali: "-1", race: "", score: "-1" },
    // Gaganvir
    { name: "Sergio Perez", quali: "8", race: "", score: "8" },
    { name: "Valtteri Bottas", quali: "10", race: "", score: "10" },
    // Gurvir
    { name: "George Russel", quali: "3", race: "", score: "3" },
    { name: "Lando Norris", quali: "4", race: "", score: "4" }
];
let bahrainStandings = bahrain.sort((a, b) => b.score - a.score);
let bahrainBody = document.querySelector(".bahrainBody")
let bahrainStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < bahrainStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = bahrainStandings[i].name
        qualiScore.innerHTML = bahrainStandings[i].quali
        raceScore.innerHTML = bahrainStandings[i].race
        teamScore.innerHTML = bahrainStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        bahrainBody.appendChild(row);
    }
}

overallScores();
bahrainStandingsFunction();