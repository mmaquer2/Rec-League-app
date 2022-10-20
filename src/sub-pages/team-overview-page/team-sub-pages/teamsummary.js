import {useState} from "react";


function TeamSummary(){

    const [teamPlayers, setTeamPlayers] = useState([]);
    const [teamSchedule, setTeamSchedule] = useState([]);
    const [teamStatistics,setTeamStats] = useState([]);
    const [teamForm,setTeamForm] = useState("");


    return(<>

        <h4> Team Summary: </h4>
        <p>  Form: {teamForm} </p>


    </>)

}

export { TeamSummary }