// Esercizio: Snack 2

/* Traccia: 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// Array creation
const football_teams = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0
    },
    {
        name: "Bari",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0
    },
]

console.log(football_teams) //print list

// main code
set_points_fouls(football_teams)
console.log(football_teams) // print football_teams compiled

// functions definition 

function set_points_fouls(teams){
    for (let i =0; i < teams.length; i++){
        actual_obj = teams[i]
        actual_obj["points"] = Math.floor(Math.random()*20)
        actual_obj["fouls"] = Math.floor(Math.random()*20)
    }
}