

const GameEventResult = {
    "date": "",
    "time": "",
    "location": "",
    "opponent": "",
    homeTeam:"",
    awayTeam:"",
    homeScore:0,
    awayScore: 0,
    winningTeam: "",
    gameStatRecord: {}

}

const gameStatRecord = {
    scores: [],
    assist: [],
    yellowCards:[],
    redCards: [],

}

const GameEvent1 = {
    "date": "10-21-2022",
    "time": "1900",
    "location": "Old Tafford",
    "opponent": "Manchester United FC",

}
const GameEvent2 = {
    "date": "10-12-2022",
    "time": "1700",
    "location": "white hart lane",
    "opponent": "Spurs FC",
}

const GameEvent3 = {
    "date": "10-15-2022",
    "time": "1900",
    "location": "madrid stadio olimpico",
    "opponent": "Real Madrid FC",

}


const player0 = { "position": "CDM", "role": "player", "username": "player0"}
const player1 = { "position": "CDM", "role": "player", "username": "player1"}
const player2 = { "position": "CDM", "role": "player", "username": "player2"}
const player3 = { "position": "CDM", "role": "player", "username": "player3"}
const player4 = { "position": "CDM", "role": "player", "username": "player4"}
const player5 = { "position": "CDM", "role": "player", "username": "player5"}
const player6 = { "position": "CB", "role": "player", "username": "player6"}
const player7 = { "position": "CB", "role": "player", "username": "player7"}
const player8 = { "position": "CB", "role": "player", "username": "player8"}
const player9 = { "position": "CB", "role": "player", "username": "player9"}
const player10 = { "position": "CB", "role": "player", "username": "player10"}
const player11 = { "position": "CF", "role": "player", "username": "player11"}
const player12 = { "position": "FW", "role": "player", "username": "player12"}
const player13 = { "position": "FW", "role": "player", "username": "player13"}
const player14 = { "position": "FW", "role": "player", "username": "player14"}
const player15 = { "position": "FW", "role": "player", "username": "player15"}
const player16 = { "position": "FW", "role": "player", "username": "player16"}
const player17 = { "position": "FW", "role": "player", "username": "player17"}
const player18 = { "position": "FW", "role": "player", "username": "player18"}



const fcTulsa = {
    name:"FC Tulsa",
    manager: "Mike Myers",
    gameEvents: [ GameEvent1, GameEvent2, GameEvent3],
    players: [
        player0,
        player1,
        player2,
        player3,
        player4,
        player5,
        player6,
        player7,

    ]

}
const team2 = {
    name:"Chelsea",
    manager: "",
    gameEvents: [ GameEvent1, GameEvent2, GameEvent3 ],
    players: [
        player3,
        player4,
        player5,
        player6,
        player7,
        player8,
        player9,
        player10,
        player11,
        player12,
        player13,
    ]


}
const team3 = {
    name:"team3",
    manager: "",
    gameEvents: [
    ],
    players: [

    ]


}

const team4 = {
    name:"team4",
    manager: "",
    gameEvents: [ GameEvent1, GameEvent2, GameEvent3],
    players: [

    ]


}



export const teams = {

    "fcTulsa": fcTulsa,
    "chelsea": team2,
    "team3": team3,
    "team4": team4,


}


const Teams = {

    "SpursFC": {
        "Manager": "Antonio Conte",
        players: {



        },
        gameEvents: {},
        teamStats: {}
    },


    "ChelseaFC": {
        "Manager": "Graham Potter",
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