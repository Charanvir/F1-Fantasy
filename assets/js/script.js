// Overall
points = [
    { name: "Charanvir", score: "100" },
    { name: "Gaganvir", score: "39" },
    { name: "Gurvir", score: "58" },
    { name: "Jaskaran", score: "66" },
    { name: "Joe", score: "23" },
    { name: "Manroop", score: "70" },
    { name: "Randeep", score: "43" }
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

// Drivers Overall Standings
drivers = [
    { name: "Leclerc", quali: "29", race: "37", score: "66" },
    { name: "Ocon", quali: "11", race: "23", score: "34" },
    { name: "Hamilton", quali: "10", race: "27", score: "37" },
    { name: "Alonso", quali: "13", race: "-7", score: "6" },
    { name: "Perez", quali: "23", race: "-6", score: "17" },
    { name: "Bottas", quali: "18", race: "4", score: "22" },
    { name: "Verstappen", quali: "22", race: "15", score: "37" },
    { name: "Stroll", quali: "3", race: "26", score: "29" },
    { name: "Sainz", quali: "18", race: "15", score: "33" },
    { name: "Gasly", quali: "13", race: "4", score: "17" },
    { name: "Russel", quali: "13", race: "27", score: "40" },
    { name: "Ricciardo", quali: "-1", race: "7", score: "6" },
    { name: "Norris", quali: "8", race: "10", score: "18" },
    { name: "Magnussen", quali: "15", race: "22", score: "37" },
]
let driverStandings = drivers.sort((a, b) => b.score - a.score);
let driverBody = document.querySelector(".driverBody");
let driverScores = function () {
    counter = 0;
    for (i = 0; i < driverStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = driverStandings[i].name
        qualiScore.innerHTML = driverStandings[i].quali
        raceScore.innerHTML = driverStandings[i].race
        teamScore.innerHTML = driverStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        driverBody.appendChild(row);
    }
}

// Bahrain
bahrain = [
    // Randeep 33
    { name: "Lewis Hamilton", quali: 11, race: 16, score: 27 },
    { name: "Fernando Alonso", quali: 8, race: -2, score: 6 },
    // Jaskaran 26
    { name: "Max Verstappen", quali: 14, race: -5, score: 9 },
    { name: "Lance Stroll", quali: -1, race: 18, score: 17 },
    // Manroop 41
    { name: "Carlos Sainz", quali: 9, race: 9, score: 18 },
    { name: "Kevin Magnussen", quali: 9, race: 14, score: 23 },
    // Charanvir 50
    { name: "Charles Leclerc", quali: 15, race: 19, score: 34 },
    { name: "Esteban Ocon", quali: 0, race: 16, score: 16 },
    // Joe 12
    { name: "Pierre Gasly", quali: 6, race: -5, score: 1 },
    { name: "Daniel Ricciardo", quali: -1, race: 12, score: 11 },
    // Gaganvir 22
    { name: "Sergio Perez", quali: 8, race: -5, score: 3 },
    { name: "Valtteri Bottas", quali: 10, race: 9, score: 19 },
    // Gurvir 16
    { name: "George Russel", quali: 3, race: 15, score: 18 },
    { name: "Lando Norris", quali: 4, race: -6, score: -2 }
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

// Saudi Arabia
saudi = [
    // Randeep 10
    { name: "Lewis Hamilton", quali: -1, race: 11, score: 10 },
    { name: "Fernando Alonso", quali: 5, race: -5, score: 0 },
    // Jaskaran 40
    { name: "Max Verstappen", quali: 8, race: 20, score: 28 },
    { name: "Lance Stroll", quali: 4, race: 8, score: 12 },
    // Manroop 29
    { name: "Carlos Sainz", quali: 9, race: 6, score: 15 },
    { name: "Kevin Magnussen", quali: 6, race: 8, score: 14 },
    // Charanvir 50
    { name: "Charles Leclerc", quali: 14, race: 18, score: 32 },
    { name: "Esteban Ocon", quali: 11, race: 7, score: 18 },
    // Joe 11
    { name: "Pierre Gasly", quali: 7, race: 9, score: 16 },
    { name: "Daniel Ricciardo", quali: 0, race: -5, score: -5 },
    // Gaganvir 17
    { name: "Sergio Perez", quali: 15, race: -1, score: 14 },
    { name: "Valtteri Bottas", quali: 8, race: -5, score: 3 },
    // Gurvir 42
    { name: "George Russel", quali: 10, race: 12, score: 22 },
    { name: "Lando Norris", quali: 4, race: 16, score: 20 }
];
let saudiStandings = saudi.sort((a, b) => b.score - a.score);
let saudiBody = document.querySelector(".saudiBody")
let saudiStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < saudiStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = saudiStandings[i].name
        qualiScore.innerHTML = saudiStandings[i].quali
        raceScore.innerHTML = saudiStandings[i].race
        teamScore.innerHTML = saudiStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        saudiBody.appendChild(row);
    }
}

// Australia
// australia = [
//     // Randeep 
//     { name: "Lewis Hamilton", quali: , race: , score:  },
//     { name: "Fernando Alonso", quali: , race: , score: },
//     // Jaskaran 
//     { name: "Max Verstappen", quali: , race: , score:  },
//     { name: "Lance Stroll", quali: , race: , score:  },
//     // Manroop 
//     { name: "Carlos Sainz", quali: , race: , score:  },
//     { name: "Kevin Magnussen", quali: , race: , score:  },
//     // Charanvir 
//     { name: "Charles Leclerc", quali: , race: , score:  },
//     { name: "Esteban Ocon", quali: , race: , score:  },
//     // Joe 
//     { name: "Pierre Gasly", quali: , race: , score:  },
//     { name: "Daniel Ricciardo", quali: , race: , score:  },
//     // Gaganvir 
//     { name: "Sergio Perez", quali: , race: , score:  },
//     { name: "Valtteri Bottas", quali: , race: , score:  },
//     // Gurvir 
//     { name: "George Russel", quali: , race: , score:  },
//     { name: "Lando Norris", quali: , race: , score:  }
// ];
// let australiaStandings = australia.sort((a, b) => b.score - a.score);
// let australiaBody = document.querySelector(".australiaBody")
// let australiaStandingsFunction = function () {
//     counter = 0;
//     for (i = 0; i < australiaStandings.length; i++) {
//         counter++
//         let row = document.createElement("tr")
//         let header = document.createElement("th");
//         let teamName = document.createElement("td");
//         let qualiScore = document.createElement("td");
//         let raceScore = document.createElement("td");
//         let teamScore = document.createElement("td");
//         teamName.innerHTML = australiaStandings[i].name
//         qualiScore.innerHTML = australiaStandings[i].quali
//         raceScore.innerHTML = australiaStandings[i].race
//         teamScore.innerHTML = australiaStandings[i].score
//         header.setAttribute("scope", "row");
//         header.innerHTML = counter;
//         row.appendChild(header);
//         row.appendChild(teamName);
//         row.appendChild(qualiScore);
//         row.appendChild(raceScore);
//         row.appendChild(teamScore);
//         australiaBody.appendChild(row);
//     }
// }



overallScores();
driverScores();
bahrainStandingsFunction();
saudiStandingsFunction();
// australiaStandingsFunction();