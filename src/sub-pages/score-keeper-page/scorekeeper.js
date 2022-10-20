

import { useState, useEffect } from "react"


/*
    ScoreKeeper Page:



 */
function ScoreKeeper(){

    const [friendlyGoals, setFriendlyGoals] = useState(0);
    const [oppGoals, setOppGoals] = useState(0);
    const [friendlyShots, setFriendlyShots] = useState(0);
    const [oppShots, setOppShots] = useState(0);
    const [gameTime, setGameTime] = useState(90);

    //TODO:




    const gameStatRecord = {
        scores: [],
        assist: [],
        yellowCards:[],
        redCards: [],

    }

    //TODO: submit a game with the firebase route
    const submitTotals = () => {


    }


    //start a new game event:

    return (<>

    <h3>Score keeper</h3>
    <p>under construction, coming soon!</p>




    </>)
}

export { ScoreKeeper }