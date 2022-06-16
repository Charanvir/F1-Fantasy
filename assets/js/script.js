// Bahrain Standings
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

// Saudi Arabia Standings
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

// Australia Standings
australia = [
    // Randeep 4
    { name: "Lewis Hamilton", quali: 11, race: 7, score: 18 },
    { name: "Fernando Alonso", quali: 2, race: -16, score: -14 },
    // Jaskaran 22
    { name: "Max Verstappen", quali: 14, race: -5, score: 9 },
    { name: "Lance Stroll", quali: -5, race: 18, score: 13 },
    // Manroop -1
    { name: "Carlos Sainz", quali: 3, race: -5, score: -2 },
    { name: "Kevin Magnussen", quali: -1, race: 2, score: 1 },
    // Charanvir 52
    { name: "Charles Leclerc", quali: 15, race: 19, score: 34 },
    { name: "Esteban Ocon", quali: 8, race: 10, score: 18 },
    // Joe 24
    { name: "Pierre Gasly", quali: 4, race: 10, score: 14 },
    { name: "Daniel Ricciardo", quali: 5, race: 5, score: 10 },
    // Gaganvir 43
    { name: "Sergio Perez", quali: 10, race: 15, score: 25 },
    { name: "Valtteri Bottas", quali: 4, race: 15, score: 19 },
    // Gurvir 44
    { name: "George Russel", quali: 6, race: 18, score: 24 },
    { name: "Lando Norris", quali: 12, race: 8, score: 20 }
];
let australiaStandings = australia.sort((a, b) => b.score - a.score);
let australiaBody = document.querySelector(".australiaBody")
let australiaStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < australiaStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = australiaStandings[i].name
        qualiScore.innerHTML = australiaStandings[i].quali
        raceScore.innerHTML = australiaStandings[i].race
        teamScore.innerHTML = australiaStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        australiaBody.appendChild(row);
    }
}

// Imola Standings
imola = [
    // Randeep  11
    { name: "Lewis Hamilton", quali: 0, sprint: -4, race: 0, score: -4 },
    { name: "Fernando Alonso", quali: 11, sprint: -4, race: -5, score: 2 },
    // Jaskaran 
    { name: "Max Verstappen", quali: 15, sprint: 9, race: 19, score: 43 },
    { name: "Lance Stroll", quali: 0, sprint: -2, race: 9, score: 7 },
    // Manroop 
    { name: "Carlos Sainz", quali: 2, sprint: 12, race: -5, score: 9 },
    { name: "Kevin Magnussen", quali: 12, sprint: -4, race: 4, score: 12 },
    // Charanvir 
    { name: "Charles Leclerc", quali: 14, sprint: 8, race: 1, score: 23 },
    { name: "Esteban Ocon", quali: -1, sprint: 4, race: 8, score: 11 },
    // Joe 
    { name: "Pierre Gasly", quali: -1, sprint: -2, race: 8, score: 5 },
    { name: "Daniel Ricciardo", quali: 6, sprint: -2, race: -26, score: -22 },
    // Gaganvir 
    { name: "Sergio Perez", quali: 5, sprint: 14, race: 9, score: 28 },
    { name: "Valtteri Bottas", quali: 8, sprint: 6, race: 14, score: 28 },
    // Gurvir 
    { name: "George Russel", quali: 4, sprint: 4, race: 25, score: 33 },
    { name: "Lando Norris", quali: 13, sprint: 1, race: 16, score: 30 }
];
let imolaStandings = imola.sort((a, b) => b.score - a.score);
let imolaBody = document.querySelector(".imolaBody")
let imolaStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < imolaStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let sprintScore = document.createElement('td');
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = imolaStandings[i].name
        qualiScore.innerHTML = imolaStandings[i].quali
        sprintScore.innerHTML = imolaStandings[i].sprint
        raceScore.innerHTML = imolaStandings[i].race
        teamScore.innerHTML = imolaStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(sprintScore)
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        imolaBody.appendChild(row);
    }
}

// Miami Standings
miami = [
    // Randeep 
    { name: "Lewis Hamilton", quali: 10, race: 3, score: 13 },
    { name: "Fernando Alonso", quali: 4, race: -2, score: 2 },
    // Jaskaran 
    { name: "Max Verstappen", quali: 13, race: 23, score: 36 },
    { name: "Lance Stroll", quali: 6, race: 5, score: 11 },
    // Manroop 
    { name: "Carlos Sainz", quali: 10, race: 4, score: 14 },
    { name: "Kevin Magnussen", quali: -1, race: -2, score: -3 },
    // Charanvir 
    { name: "Charles Leclerc", quali: 15, race: 11, score: 26 },
    { name: "Esteban Ocon", quali: -5, race: 31, score: 26 },
    // Joe 
    { name: "Pierre Gasly", quali: 9, race: -5, score: 4 },
    { name: "Daniel Ricciardo", quali: 0, race: 6, score: 6 },
    // Gaganvir 
    { name: "Sergio Perez", quali: 8, race: 5, score: 13 },
    { name: "Valtteri Bottas", quali: 11, race: 4, score: 15 },
    // Gurvir 
    { name: "George Russel", quali: 0, race: 24, score: 24 },
    { name: "Lando Norris", quali: 8, race: -5, score: 3 }
];
let miamiStandings = miami.sort((a, b) => b.score - a.score);
let miamiBody = document.querySelector(".miamiBody")
let miamiStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < miamiStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = miamiStandings[i].name
        qualiScore.innerHTML = miamiStandings[i].quali
        raceScore.innerHTML = miamiStandings[i].race
        teamScore.innerHTML = miamiStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        miamiBody.appendChild(row);
    }
}

// Spain Standings
spain = [
    // Randeep 
    { name: "Lewis Hamilton", quali: 6, race: 6, score: 12 },
    { name: "Fernando Alonso", quali: -1, race: 16, score: 15 },
    // Jaskaran 
    { name: "Max Verstappen", quali: 14, race: 16, score: 30 },
    { name: "Lance Stroll", quali: -1, race: 4, score: 3 },
    // Manroop 
    { name: "Carlos Sainz", quali: 9, race: 3, score: 12 },
    { name: "Kevin Magnussen", quali: 8, race: -24, score: -16 },
    // Charanvir 
    { name: "Charles Leclerc", quali: 15, race: -5, score: 10 },
    { name: "Esteban Ocon", quali: 4, race: 18, score: 22 },
    // Joe 
    { name: "Pierre Gasly", quali: 0, race: 0, score: 0 },
    { name: "Daniel Ricciardo", quali: 7, race: -8, score: -1 },
    // Gaganvir 
    { name: "Sergio Perez", quali: 7, race: 18, score: 25 },
    { name: "Valtteri Bottas", quali: 9, race: 11, score: 20 },
    // Gurvir 
    { name: "George Russel", quali: 12, race: 14, score: 26 },
    { name: "Lando Norris", quali: 0, race: 13, score: 13 }
];
let spainStandings = spain.sort((a, b) => b.score - a.score);
let spainBody = document.querySelector(".spainBody")
let spainStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < spainStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = spainStandings[i].name
        qualiScore.innerHTML = spainStandings[i].quali
        raceScore.innerHTML = spainStandings[i].race
        teamScore.innerHTML = spainStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        spainBody.appendChild(row);
    }
}

// monocco Standings
monocco = [
    // Randeep 
    { name: "Lewis Hamilton", quali: 4, race: 1, score: 5 },
    { name: "Fernando Alonso", quali: 9, race: 8, score: 17 },
    // Jaskaran 
    { name: "Max Verstappen", quali: 8, race: 8, score: 30 },
    { name: "Lance Stroll", quali: -1, race: 6, score: 3 },
    // Manroop 
    { name: "Carlos Sainz", quali: 10, race: 13, score: 23 },
    { name: "Kevin Magnussen", quali: 4, race: -5, score: -1 },
    // Charanvir 
    { name: "Charles Leclerc", quali: 15, race: -1, score: 14 },
    { name: "Esteban Ocon", quali: 2, race: -6, score: -4 },
    // Joe 
    { name: "Pierre Gasly", quali: -1, race: 16, score: 15 },
    { name: "Daniel Ricciardo", quali: 0, race: 0, score: 0 },
    // Gaganvir 
    { name: "Sergio Perez", quali: 13, race: 18, score: 31 },
    { name: "Valtteri Bottas", quali: 4, race: 12, score: 16 },
    // Gurvir 
    { name: "George Russel", quali: 10, race: 12, score: 22 },
    { name: "Lando Norris", quali: 11, race: 12, score: 23 }
];
let monoccoStandings = monocco.sort((a, b) => b.score - a.score);
let monoccoBody = document.querySelector(".monoccoBody")
let monoccoStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < monoccoStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = monoccoStandings[i].name
        qualiScore.innerHTML = monoccoStandings[i].quali
        raceScore.innerHTML = monoccoStandings[i].race
        teamScore.innerHTML = monoccoStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        monoccoBody.appendChild(row);
    }
}

// baku Standings
baku = [
    // Randeep 
    { name: "Lewis Hamilton", quali: 5, race: 11, score: 16 },
    { name: "Fernando Alonso", quali: 6, race: 14, score: 20 },
    // Jaskaran 
    { name: "Max Verstappen", quali: 9, race: 18, score: 27 },
    { name: "Lance Stroll", quali: -1, race: -5, score: -6 },
    // Manroop 
    { name: "Carlos Sainz", quali: 8, race: -5, score: 3 },
    { name: "Kevin Magnussen", quali: 3, race: -5, score: -2 },
    // Charanvir 
    { name: "Charles Leclerc", quali: 15, race: -5, score: 10 },
    { name: "Esteban Ocon", quali: 0, race: 5, score: 5 },
    // Joe 
    { name: "Pierre Gasly", quali: 10, race: 12, score: 22 },
    { name: "Daniel Ricciardo", quali: 0, race: 15, score: 15 },
    // Gaganvir 
    { name: "Sergio Perez", quali: 14, race: 12, score: 26 },
    { name: "Valtteri Bottas", quali: 0, race: 12, score: 12 },
    // Gurvir 
    { name: "George Russel", quali: 11, race: 16, score: 27 },
    { name: "Lando Norris", quali: 4, race: 4, score: 8 }
];
let bakuStandings = baku.sort((a, b) => b.score - a.score);
let bakuBody = document.querySelector(".bakuBody")
let bakuStandingsFunction = function () {
    counter = 0;
    for (i = 0; i < bakuStandings.length; i++) {
        counter++
        let row = document.createElement("tr")
        let header = document.createElement("th");
        let teamName = document.createElement("td");
        let qualiScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = bakuStandings[i].name
        qualiScore.innerHTML = bakuStandings[i].quali
        raceScore.innerHTML = bakuStandings[i].race
        teamScore.innerHTML = bakuStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        bakuBody.appendChild(row);
    }
}

// Drivers Overall Standings
drivers = [
    // Charanvir
    {
        name: "Leclerc",
        quali: bahrain.find(x => x.name === "Charles Leclerc").quali + saudi.find(x => x.name === "Charles Leclerc").quali + australia.find(x => x.name === "Charles Leclerc").quali + imola.find(x => x.name === "Charles Leclerc").quali + miami.find(x => x.name === "Charles Leclerc").quali + spain.find(x => x.name === "Charles Leclerc").quali + monocco.find(x => x.name === "Charles Leclerc").quali + baku.find(x => x.name === "Charles Leclerc").quali,
        sprint: imola.find(x => x.name === "Charles Leclerc").sprint,
        race: bahrain.find(x => x.name === "Charles Leclerc").race + saudi.find(x => x.name === "Charles Leclerc").race + australia.find(x => x.name === "Charles Leclerc").race + imola.find(x => x.name === "Charles Leclerc").race + miami.find(x => x.name === "Charles Leclerc").race + spain.find(x => x.name === "Charles Leclerc").race + monocco.find(x => x.name === "Charles Leclerc").race + baku.find(x => x.name === "Charles Leclerc").race,
        score: bahrain.find(x => x.name === "Charles Leclerc").score + saudi.find(x => x.name === "Charles Leclerc").score + australia.find(x => x.name === "Charles Leclerc").score + imola.find(x => x.name === "Charles Leclerc").score + miami.find(x => x.name === "Charles Leclerc").score + spain.find(x => x.name === "Charles Leclerc").score + monocco.find(x => x.name === "Charles Leclerc").score + baku.find(x => x.name === "Charles Leclerc").score
    },
    {
        name: "Ocon",
        quali: bahrain.find(x => x.name === "Esteban Ocon").quali + saudi.find(x => x.name === "Esteban Ocon").quali + australia.find(x => x.name === "Esteban Ocon").quali + imola.find(x => x.name === "Esteban Ocon").quali + miami.find(x => x.name === "Esteban Ocon").quali + spain.find(x => x.name === "Esteban Ocon").quali + monocco.find(x => x.name === "Esteban Ocon").quali + baku.find(x => x.name === "Esteban Ocon").quali,
        sprint: imola.find(x => x.name === "Esteban Ocon").sprint,
        race: bahrain.find(x => x.name === "Esteban Ocon").race + saudi.find(x => x.name === "Esteban Ocon").race + australia.find(x => x.name === "Esteban Ocon").race + imola.find(x => x.name === "Esteban Ocon").race + miami.find(x => x.name === "Esteban Ocon").race + spain.find(x => x.name === "Esteban Ocon").race + monocco.find(x => x.name === "Esteban Ocon").race + baku.find(x => x.name === "Esteban Ocon").race,
        score: bahrain.find(x => x.name === "Esteban Ocon").score + saudi.find(x => x.name === "Esteban Ocon").score + australia.find(x => x.name === "Esteban Ocon").score + imola.find(x => x.name === "Esteban Ocon").score + miami.find(x => x.name === "Esteban Ocon").score + spain.find(x => x.name === "Esteban Ocon").score + monocco.find(x => x.name === "Esteban Ocon").score + baku.find(x => x.name === "Esteban Ocon").score
    },
    // Randeep
    {
        name: "Hamilton",
        quali: bahrain.find(x => x.name === "Lewis Hamilton").quali + saudi.find(x => x.name === "Lewis Hamilton").quali + australia.find(x => x.name === "Lewis Hamilton").quali + imola.find(x => x.name === "Lewis Hamilton").quali + miami.find(x => x.name === "Lewis Hamilton").quali + spain.find(x => x.name === "Lewis Hamilton").quali + monocco.find(x => x.name === "Lewis Hamilton").quali + baku.find(x => x.name === "Lewis Hamilton").quali,
        sprint: imola.find(x => x.name === "Lewis Hamilton").sprint,
        race: bahrain.find(x => x.name === "Lewis Hamilton").race + saudi.find(x => x.name === "Lewis Hamilton").race + australia.find(x => x.name === "Lewis Hamilton").race + imola.find(x => x.name === "Lewis Hamilton").race + miami.find(x => x.name === "Lewis Hamilton").race + spain.find(x => x.name === "Lewis Hamilton").race + monocco.find(x => x.name === "Lewis Hamilton").race + baku.find(x => x.name === "Lewis Hamilton").race,
        score: bahrain.find(x => x.name === "Lewis Hamilton").score + saudi.find(x => x.name === "Lewis Hamilton").score + australia.find(x => x.name === "Lewis Hamilton").score + imola.find(x => x.name === "Lewis Hamilton").score + miami.find(x => x.name === "Lewis Hamilton").score + spain.find(x => x.name === "Lewis Hamilton").score + monocco.find(x => x.name === "Lewis Hamilton").score + baku.find(x => x.name === "Lewis Hamilton").score
    },
    {
        name: "Alonso",
        quali: bahrain.find(x => x.name === "Fernando Alonso").quali + saudi.find(x => x.name === "Fernando Alonso").quali + australia.find(x => x.name === "Fernando Alonso").quali + imola.find(x => x.name === "Fernando Alonso").quali + miami.find(x => x.name === "Fernando Alonso").quali + spain.find(x => x.name === "Fernando Alonso").quali + monocco.find(x => x.name === "Fernando Alonso").quali + baku.find(x => x.name === "Fernando Alonso").quali,
        sprint: imola.find(x => x.name === "Fernando Alonso").sprint,
        race: bahrain.find(x => x.name === "Fernando Alonso").race + saudi.find(x => x.name === "Fernando Alonso").race + australia.find(x => x.name === "Fernando Alonso").race + imola.find(x => x.name === "Fernando Alonso").race + miami.find(x => x.name === "Fernando Alonso").race + spain.find(x => x.name === "Fernando Alonso").race + monocco.find(x => x.name === "Fernando Alonso").race + baku.find(x => x.name === "Fernando Alonso").race,
        score: bahrain.find(x => x.name === "Fernando Alonso").score + saudi.find(x => x.name === "Fernando Alonso").score + australia.find(x => x.name === "Fernando Alonso").score + imola.find(x => x.name === "Fernando Alonso").score + miami.find(x => x.name === "Fernando Alonso").score + spain.find(x => x.name === "Fernando Alonso").score + monocco.find(x => x.name === "Fernando Alonso").score + baku.find(x => x.name === "Fernando Alonso").score
    },
    // Gaganvir
    {
        name: "Perez",
        quali: bahrain.find(x => x.name === "Sergio Perez").quali + saudi.find(x => x.name === "Sergio Perez").quali + australia.find(x => x.name === "Sergio Perez").quali + imola.find(x => x.name === "Sergio Perez").quali + miami.find(x => x.name === "Sergio Perez").quali + spain.find(x => x.name === "Sergio Perez").quali + monocco.find(x => x.name === "Sergio Perez").quali + baku.find(x => x.name === "Sergio Perez").quali,
        sprint: imola.find(x => x.name === "Sergio Perez").sprint,
        race: bahrain.find(x => x.name === "Sergio Perez").race + saudi.find(x => x.name === "Sergio Perez").race + australia.find(x => x.name === "Sergio Perez").race + imola.find(x => x.name === "Sergio Perez").race + miami.find(x => x.name === "Sergio Perez").race + spain.find(x => x.name === "Sergio Perez").race + monocco.find(x => x.name === "Sergio Perez").race + baku.find(x => x.name === "Sergio Perez").race,
        score: bahrain.find(x => x.name === "Sergio Perez").score + saudi.find(x => x.name === "Sergio Perez").score + australia.find(x => x.name === "Sergio Perez").score + imola.find(x => x.name === "Sergio Perez").score + miami.find(x => x.name === "Sergio Perez").score + spain.find(x => x.name === "Sergio Perez").score + monocco.find(x => x.name === "Sergio Perez").score + baku.find(x => x.name === "Sergio Perez").score
    },
    {
        name: "Bottas",
        quali: bahrain.find(x => x.name === "Valtteri Bottas").quali + saudi.find(x => x.name === "Valtteri Bottas").quali + australia.find(x => x.name === "Valtteri Bottas").quali + imola.find(x => x.name === "Valtteri Bottas").quali + miami.find(x => x.name === "Valtteri Bottas").quali + spain.find(x => x.name === "Valtteri Bottas").quali + monocco.find(x => x.name === "Valtteri Bottas").quali + baku.find(x => x.name === "Valtteri Bottas").quali,
        sprint: imola.find(x => x.name === "Valtteri Bottas").sprint,
        race: bahrain.find(x => x.name === "Valtteri Bottas").race + saudi.find(x => x.name === "Valtteri Bottas").race + australia.find(x => x.name === "Valtteri Bottas").race + imola.find(x => x.name === "Valtteri Bottas").race + miami.find(x => x.name === "Valtteri Bottas").race + spain.find(x => x.name === "Valtteri Bottas").race + monocco.find(x => x.name === "Valtteri Bottas").race + baku.find(x => x.name === "Valtteri Bottas").race,
        score: bahrain.find(x => x.name === "Valtteri Bottas").score + saudi.find(x => x.name === "Valtteri Bottas").score + australia.find(x => x.name === "Valtteri Bottas").score + imola.find(x => x.name === "Valtteri Bottas").score + miami.find(x => x.name === "Valtteri Bottas").score + spain.find(x => x.name === "Valtteri Bottas").score + monocco.find(x => x.name === "Valtteri Bottas").score + baku.find(x => x.name === "Valtteri Bottas").score
    },
    // Jaskaran
    {
        name: "Verstappen",
        quali: bahrain.find(x => x.name === "Max Verstappen").quali + saudi.find(x => x.name === "Max Verstappen").quali + australia.find(x => x.name === "Max Verstappen").quali + imola.find(x => x.name === "Max Verstappen").quali + miami.find(x => x.name === "Max Verstappen").quali + spain.find(x => x.name === "Max Verstappen").quali + monocco.find(x => x.name === "Max Verstappen").quali + baku.find(x => x.name === "Max Verstappen").quali,
        sprint: imola.find(x => x.name === "Max Verstappen").sprint,
        race: bahrain.find(x => x.name === "Max Verstappen").race + saudi.find(x => x.name === "Max Verstappen").race + australia.find(x => x.name === "Max Verstappen").race + imola.find(x => x.name === "Max Verstappen").race + miami.find(x => x.name === "Max Verstappen").race + spain.find(x => x.name === "Max Verstappen").race + monocco.find(x => x.name === "Max Verstappen").race + baku.find(x => x.name === "Max Verstappen").race,
        score: bahrain.find(x => x.name === "Max Verstappen").score + saudi.find(x => x.name === "Max Verstappen").score + australia.find(x => x.name === "Max Verstappen").score + imola.find(x => x.name === "Max Verstappen").score + miami.find(x => x.name === "Max Verstappen").score + spain.find(x => x.name === "Max Verstappen").score + monocco.find(x => x.name === "Max Verstappen").score + baku.find(x => x.name === "Max Verstappen").score
    },
    {
        name: "Stroll",
        quali: bahrain.find(x => x.name === "Lance Stroll").quali + saudi.find(x => x.name === "Lance Stroll").quali + australia.find(x => x.name === "Lance Stroll").quali + imola.find(x => x.name === "Lance Stroll").quali + miami.find(x => x.name === "Lance Stroll").quali + spain.find(x => x.name === "Lance Stroll").quali + monocco.find(x => x.name === "Lance Stroll").quali + baku.find(x => x.name === "Lance Stroll").quali,
        sprint: imola.find(x => x.name === "Lance Stroll").sprint,
        race: bahrain.find(x => x.name === "Lance Stroll").race + saudi.find(x => x.name === "Lance Stroll").race + australia.find(x => x.name === "Lance Stroll").race + imola.find(x => x.name === "Lance Stroll").race + miami.find(x => x.name === "Lance Stroll").race + spain.find(x => x.name === "Lance Stroll").race + monocco.find(x => x.name === "Lance Stroll").race + baku.find(x => x.name === "Lance Stroll").race,
        score: bahrain.find(x => x.name === "Lance Stroll").score + saudi.find(x => x.name === "Lance Stroll").score + australia.find(x => x.name === "Lance Stroll").score + imola.find(x => x.name === "Lance Stroll").score + miami.find(x => x.name === "Lance Stroll").score + spain.find(x => x.name === "Lance Stroll").score + monocco.find(x => x.name === "Lance Stroll").score + baku.find(x => x.name === "Lance Stroll").score
    },
    // Manroop
    {
        name: "Sainz",
        quali: bahrain.find(x => x.name === "Carlos Sainz").quali + saudi.find(x => x.name === "Carlos Sainz").quali + australia.find(x => x.name === "Carlos Sainz").quali + imola.find(x => x.name === "Carlos Sainz").quali + miami.find(x => x.name === "Carlos Sainz").quali + spain.find(x => x.name === "Carlos Sainz").quali + monocco.find(x => x.name === "Carlos Sainz").quali + baku.find(x => x.name === "Carlos Sainz").quali,
        sprint: imola.find(x => x.name === "Carlos Sainz").sprint,
        race: bahrain.find(x => x.name === "Carlos Sainz").race + saudi.find(x => x.name === "Carlos Sainz").race + australia.find(x => x.name === "Carlos Sainz").race + imola.find(x => x.name === "Carlos Sainz").race + miami.find(x => x.name === "Carlos Sainz").race + spain.find(x => x.name === "Carlos Sainz").race + monocco.find(x => x.name === "Carlos Sainz").race + baku.find(x => x.name === "Carlos Sainz").race,
        score: bahrain.find(x => x.name === "Carlos Sainz").score + saudi.find(x => x.name === "Carlos Sainz").score + australia.find(x => x.name === "Carlos Sainz").score + imola.find(x => x.name === "Carlos Sainz").score + miami.find(x => x.name === "Carlos Sainz").score + spain.find(x => x.name === "Carlos Sainz").score + monocco.find(x => x.name === "Carlos Sainz").score + baku.find(x => x.name === "Carlos Sainz").score
    },
    {
        name: "Magnussen",
        quali: bahrain.find(x => x.name === "Kevin Magnussen").quali + saudi.find(x => x.name === "Kevin Magnussen").quali + australia.find(x => x.name === "Kevin Magnussen").quali + imola.find(x => x.name === "Kevin Magnussen").quali + miami.find(x => x.name === "Kevin Magnussen").quali + spain.find(x => x.name === "Kevin Magnussen").quali + monocco.find(x => x.name === "Kevin Magnussen").quali + baku.find(x => x.name === "Kevin Magnussen").quali,
        sprint: imola.find(x => x.name === "Kevin Magnussen").sprint,
        race: bahrain.find(x => x.name === "Kevin Magnussen").race + saudi.find(x => x.name === "Kevin Magnussen").race + australia.find(x => x.name === "Kevin Magnussen").race + imola.find(x => x.name === "Kevin Magnussen").race + miami.find(x => x.name === "Kevin Magnussen").race + spain.find(x => x.name === "Kevin Magnussen").race + monocco.find(x => x.name === "Kevin Magnussen").race + baku.find(x => x.name === "Kevin Magnussen").race,
        score: bahrain.find(x => x.name === "Kevin Magnussen").score + saudi.find(x => x.name === "Kevin Magnussen").score + australia.find(x => x.name === "Kevin Magnussen").score + imola.find(x => x.name === "Kevin Magnussen").score + miami.find(x => x.name === "Kevin Magnussen").score + spain.find(x => x.name === "Kevin Magnussen").score + monocco.find(x => x.name === "Kevin Magnussen").score + baku.find(x => x.name === "Kevin Magnussen").score
    },
    // Joe
    {
        name: "Gasly",
        quali: bahrain.find(x => x.name === "Pierre Gasly").quali + saudi.find(x => x.name === "Pierre Gasly").quali + australia.find(x => x.name === "Pierre Gasly").quali + imola.find(x => x.name === "Pierre Gasly").quali + miami.find(x => x.name === "Pierre Gasly").quali + spain.find(x => x.name === "Pierre Gasly").quali + monocco.find(x => x.name === "Pierre Gasly").quali + baku.find(x => x.name === "Pierre Gasly").quali,
        sprint: imola.find(x => x.name === "Pierre Gasly").sprint,
        race: bahrain.find(x => x.name === "Pierre Gasly").race + saudi.find(x => x.name === "Pierre Gasly").race + australia.find(x => x.name === "Pierre Gasly").race + imola.find(x => x.name === "Pierre Gasly").race + miami.find(x => x.name === "Pierre Gasly").race + spain.find(x => x.name === "Pierre Gasly").race + monocco.find(x => x.name === "Pierre Gasly").race + baku.find(x => x.name === "Pierre Gasly").race,
        score: bahrain.find(x => x.name === "Pierre Gasly").score + saudi.find(x => x.name === "Pierre Gasly").score + australia.find(x => x.name === "Pierre Gasly").score + imola.find(x => x.name === "Pierre Gasly").score + miami.find(x => x.name === "Pierre Gasly").score + spain.find(x => x.name === "Pierre Gasly").score + monocco.find(x => x.name === "Pierre Gasly").score + baku.find(x => x.name === "Pierre Gasly").score
    },
    {
        name: "Ricciardo",
        quali: bahrain.find(x => x.name === "Daniel Ricciardo").quali + saudi.find(x => x.name === "Daniel Ricciardo").quali + australia.find(x => x.name === "Daniel Ricciardo").quali + imola.find(x => x.name === "Daniel Ricciardo").quali + miami.find(x => x.name === "Daniel Ricciardo").quali + spain.find(x => x.name === "Daniel Ricciardo").quali + monocco.find(x => x.name === "Daniel Ricciardo").quali + baku.find(x => x.name === "Daniel Ricciardo").quali,
        sprint: imola.find(x => x.name === "Daniel Ricciardo").sprint,
        race: bahrain.find(x => x.name === "Daniel Ricciardo").race + saudi.find(x => x.name === "Daniel Ricciardo").race + australia.find(x => x.name === "Daniel Ricciardo").race + imola.find(x => x.name === "Daniel Ricciardo").race + miami.find(x => x.name === "Daniel Ricciardo").race + spain.find(x => x.name === "Daniel Ricciardo").race + monocco.find(x => x.name === "Daniel Ricciardo").race + baku.find(x => x.name === "Daniel Ricciardo").race,
        score: bahrain.find(x => x.name === "Daniel Ricciardo").score + saudi.find(x => x.name === "Daniel Ricciardo").score + australia.find(x => x.name === "Daniel Ricciardo").score + imola.find(x => x.name === "Daniel Ricciardo").score + miami.find(x => x.name === "Daniel Ricciardo").score + spain.find(x => x.name === "Daniel Ricciardo").score + monocco.find(x => x.name === "Daniel Ricciardo").score + baku.find(x => x.name === "Daniel Ricciardo").score
    },
    // Gurvir
    {
        name: "Norris",
        quali: bahrain.find(x => x.name === "Lando Norris").quali + saudi.find(x => x.name === "Lando Norris").quali + australia.find(x => x.name === "Lando Norris").quali + imola.find(x => x.name === "Lando Norris").quali + miami.find(x => x.name === "Lando Norris").quali + spain.find(x => x.name === "Lando Norris").quali + monocco.find(x => x.name === "Lando Norris").quali + baku.find(x => x.name === "Lando Norris").quali,
        sprint: imola.find(x => x.name === "Lando Norris").sprint,
        race: bahrain.find(x => x.name === "Lando Norris").race + saudi.find(x => x.name === "Lando Norris").race + australia.find(x => x.name === "Lando Norris").race + imola.find(x => x.name === "Lando Norris").race + miami.find(x => x.name === "Lando Norris").race + spain.find(x => x.name === "Lando Norris").race + monocco.find(x => x.name === "Lando Norris").race + baku.find(x => x.name === "Lando Norris").race,
        score: bahrain.find(x => x.name === "Lando Norris").score + saudi.find(x => x.name === "Lando Norris").score + australia.find(x => x.name === "Lando Norris").score + imola.find(x => x.name === "Lando Norris").score + miami.find(x => x.name === "Lando Norris").score + spain.find(x => x.name === "Lando Norris").score + monocco.find(x => x.name === "Lando Norris").score + baku.find(x => x.name === "Lando Norris").score
    },
    {
        name: "Russel",
        quali: bahrain.find(x => x.name === "George Russel").quali + saudi.find(x => x.name === "George Russel").quali + australia.find(x => x.name === "George Russel").quali + imola.find(x => x.name === "George Russel").quali + miami.find(x => x.name === "George Russel").quali + spain.find(x => x.name === "George Russel").quali + monocco.find(x => x.name === "George Russel").quali + baku.find(x => x.name === "George Russel").quali,
        sprint: imola.find(x => x.name === "George Russel").sprint,
        race: bahrain.find(x => x.name === "George Russel").race + saudi.find(x => x.name === "George Russel").race + australia.find(x => x.name === "George Russel").race + imola.find(x => x.name === "George Russel").race + miami.find(x => x.name === "George Russel").race + spain.find(x => x.name === "George Russel").race + monocco.find(x => x.name === "George Russel").race + baku.find(x => x.name === "George Russel").race,
        score: bahrain.find(x => x.name === "George Russel").score + saudi.find(x => x.name === "George Russel").score + australia.find(x => x.name === "George Russel").score + imola.find(x => x.name === "George Russel").score + miami.find(x => x.name === "George Russel").score + spain.find(x => x.name === "George Russel").score + monocco.find(x => x.name === "George Russel").score + baku.find(x => x.name === "George Russel").score
    },
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
        let sprintScore = document.createElement("td");
        let raceScore = document.createElement("td");
        let teamScore = document.createElement("td");
        teamName.innerHTML = driverStandings[i].name
        qualiScore.innerHTML = driverStandings[i].quali
        sprintScore.innerHTML = driverStandings[i].sprint
        raceScore.innerHTML = driverStandings[i].race
        teamScore.innerHTML = driverStandings[i].score
        header.setAttribute("scope", "row");
        header.innerHTML = counter;
        row.appendChild(header);
        row.appendChild(teamName);
        row.appendChild(qualiScore);
        row.appendChild(sprintScore);
        row.appendChild(raceScore);
        row.appendChild(teamScore);
        driverBody.appendChild(row);
    }
}

// Overall
points = [
    { name: "Charanvir", score: drivers.find(x => x.name === "Leclerc").score + drivers.find(x => x.name === "Ocon").score },
    { name: "Gaganvir", score: drivers.find(x => x.name === "Perez").score + drivers.find(x => x.name === "Bottas").score },
    { name: "Gurvir", score: drivers.find(x => x.name === "Norris").score + drivers.find(x => x.name === "Russel").score },
    { name: "Jaskaran", score: drivers.find(x => x.name === "Verstappen").score + drivers.find(x => x.name === "Stroll").score },
    { name: "Joe", score: drivers.find(x => x.name === "Gasly").score + drivers.find(x => x.name === "Ricciardo").score },
    { name: "Manroop", score: drivers.find(x => x.name === "Sainz").score + drivers.find(x => x.name === "Magnussen").score },
    { name: "Randeep", score: drivers.find(x => x.name === "Hamilton").score + drivers.find(x => x.name === "Alonso").score }
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




overallScores();
driverScores();
bahrainStandingsFunction();
saudiStandingsFunction();
australiaStandingsFunction();
imolaStandingsFunction();
miamiStandingsFunction();
spainStandingsFunction();
monoccoStandingsFunction();
bakuStandingsFunction();