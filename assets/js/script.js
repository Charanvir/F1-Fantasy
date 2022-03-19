points = [
    {
        name: "Charanvir",
        score: "0"
    },
    {
        name: "Gaganvir",
        score: "0"
    },
    {
        name: "Gurvir",
        score: "0"
    },
    {
        name: "Jaskaran",
        score: "0"
    },
    {
        name: "Joe",
        score: "0"
    },
    {
        name: "Manroop",
        score: "0"
    },
    {
        name: "Randeep",
        score: "0"
    }
];


let updatedStandings = points.sort((a, b) => b.score - a.score);
let tableBody = document.querySelector("tbody")

let displayScores = function () {
    counter = 0;
    for (i = 0; i < updatedStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = updatedStandings[i].name
        teamScore.innerHTML = updatedStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;

        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(teamScore);
        tableBody.appendChild(row);
    }
}

displayScores();
