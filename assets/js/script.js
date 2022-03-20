// Overall
points = [
    { name: "Charanvir", score: "50" },
    { name: "Gaganvir", score: "22" },
    { name: "Gurvir", score: "16" },
    { name: "Jaskaran", score: "26" },
    { name: "Joe", score: "12" },
    { name: "Manroop", score: "41" },
    { name: "Randeep", score: "33" }
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
    { name: "Lewis Hamilton", quali: 11, race: 16, score: 11 + 16 },
    { name: "Fernando Alonso", quali: 8, race: -2, score: 8 + (-2) },
    // jaskaran
    { name: "Max Verstappen", quali: 14, race: -5, score: 14 + (-5) },
    { name: "Lance Stroll", quali: -1, race: 18, score: -1 + 18 },
    // Manroop
    { name: "Carlos Sainz", quali: 9, race: 9, score: 9 + 9 },
    { name: "Kevin Magnussen", quali: 9, race: 14, score: 9 + 14 },
    // Charanvir
    { name: "Charles Leclerc", quali: 15, race: 19, score: 15 + 19 },
    { name: "Esteban Ocon", quali: 0, race: 16, score: 0 + 16 },
    // Joe
    { name: "Pierre Gasly", quali: 6, race: -5, score: 6 + (-5) },
    { name: "Daniel Ricciardo", quali: -1, race: 12, score: -1 + 12 },
    // Gaganvir
    { name: "Sergio Perez", quali: 8, race: -5, score: 8 + (-5) },
    { name: "Valtteri Bottas", quali: 10, race: 9, score: 10 + 9 },
    // Gurvir
    { name: "George Russel", quali: 3, race: 15, score: 3 + 15 },
    { name: "Lando Norris", quali: 4, race: -6, score: 4 + (-6) }
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
// saudi = [
//     // Randeep
//     { name: "Lewis Hamilton", quali: , race: , score:  },
//     { name: "Fernando Alonso", quali: , race: , score:  },
//     // jaskaran
//     { name: "Max Verstappen", quali: , race: , score:  },
//     { name: "Lance Stroll", quali: , race: , score:  },
//     // Manroop
//     { name: "Carlos Sainz", quali: , race: , score:  },
//     { name: "Kevin Magnussen", quali: , race: , score:  },
//     // Charanvir
//     { name: "Charles Leclerc", quali: , race: , score:  },
//     { name: "Esteban Ocon", quali: , race: , score:  },
//     // Joe
//     { name: "Pierre Gasly", quali: , race: , score: },
//     { name: "Daniel Ricciardo", quali: , race: , score:  },
//     // Gaganvir
//     { name: "Sergio Perez", quali: , race: , score:  },
//     { name: "Valtteri Bottas", quali: , race: , score:  },
//     // Gurvir
//     { name: "George Russel", quali: , race: , score:  },
//     { name: "Lando Norris", quali: , race: , score:  }
// ];
// let saudiStandings = saudi.sort((a, b) => b.score - a.score);
// let saudiBody = document.querySelector(".bahrainBody")
// let saudiStandingsFunction = function () {
//     counter = 0;
//     for (i = 0; i < saudiStandings.length; i++) {
//         counter++
//         let row = document.createElement("tr")
//         let header = document.createElement("th");
//         let teamName = document.createElement("td");
//         let qualiScore = document.createElement("td");
//         let raceScore = document.createElement("td");
//         let teamScore = document.createElement("td");
//         teamName.innerHTML = saudiStandings[i].name
//         qualiScore.innerHTML = saudiStandings[i].quali
//         raceScore.innerHTML = saudiStandings[i].race
//         teamScore.innerHTML = saudiStandings[i].score
//         header.setAttribute("scope", "row");
//         header.innerHTML = counter;
//         row.appendChild(header);
//         row.appendChild(teamName);
//         row.appendChild(qualiScore);
//         row.appendChild(raceScore);
//         row.appendChild(teamScore);
//         saudiBody.appendChild(row);
//     }
// }



overallScores();
bahrainStandingsFunction();
// saudiStandingsFunction();