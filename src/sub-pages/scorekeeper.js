

import { useState, useEffect } from "react"


/*
    ScoreKeeper Page:


 */


function ScoreKeeper(){

    const [friendlyGoals, setFriendlyGoals] = useState(0);
    const [oppGoals, setOppGoals] = useState(0);
    const [friendlyShots, setFriendlyShots] = useState(0);
    const [oppShots, setOppShots] = useState(0);

    //TODO:
    const GameEvent = {
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

    //TODO: submit a game with the firebase route
    const submitTotals = () => {


    }


    return (<>

    <h3>Score keeper</h3>
    <p>under construction, coming soon!</p>


    </>)
}

export { ScoreKeeper }