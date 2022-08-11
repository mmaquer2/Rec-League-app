/*
    createTableDate("7-22-2022", "7:30PM", "Windsor HS","Aresnal FC" ),
    createTableDate("7-28-2022", "7:30PM", "Windsor HS","Aresnal FC" ),
    createTableDate("8-3-2022", "8:30PM", "Foxboro","New England Revs FC" ),

*/


// Example Teams Table for the Firebase database




const GameEvent = {
    "date": "",
    "time": "",
    "location": "",
    "opponent": ""

}

const player = { "position": "", "role": "", "username": ""}




const Teams = {


    "SpursFC": {
        "Manager": "Antonio Conte",
        players: {},
        gameEvents: {},
        teamStats: {}
    },


    "ChelseaFC": {
        "Manager": "Thomas Tuchel",
        players: {},
        gamesEvents: {},
        teamStats: {}

    },

    "FoxboroFC": {
        "Manager": "Mac Jones",
        players: {},
        gamesEvents: {},
        teamStats: {}
    }


}