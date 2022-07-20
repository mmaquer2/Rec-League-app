import * as React from 'react';
import {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



function TeamOverview(props){


    const [teamName, setTeamName] = useState("");
    const [teamWins, setTeamWins] = useState("");
    const [teamLoses, setTeamLoses] = useState("");
    const [teamDraws, setTeamDraws] = useState("");
    const [teamRecord, setTeamRecord] = useState(""); 
    const [teamForm, setTeamForm] = useState(""); // set the form of the previous five games such as WWWDWW

    //test input for data form options 
    setTeamForm("WWDWW");

    // append the team wins, draws, losses to create a complete record structure
    function appendToCreateRecord(){


    }

    return(<>
        <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <React.Fragment>
            <CardContent>
            <p>{teamName}</p>
            <p>Season Record: {teamForm}</p>
            <p>current form: {teamForm}</p>
            </CardContent>
            </React.Fragment>
      </Card>
    </Box>
    
    
    
    
    </>)
}

export {TeamOverview}