
import * as React from 'react';
import {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Roster(props){

    const [teamRoster, setTeamRoster] = useState([])

    console.log("props in roster:")
    console.log(props.players)


    // open modal to invite player to the team.
    function openAddPlayerModal(){




    }

   

    return(
    <>
    
    <Box sx={{ minWidth: 275 }}>
      <p>Team Roster:</p>
      <Card variant="outlined">
      <React.Fragment>
            <CardContent>
            

            <Button variant="contained" sx={{width:200}}onClick = {openAddPlayerModal}> Add Player </Button>

            </CardContent>
            </React.Fragment>
      </Card>
    </Box>
    
    </>
    )

}

export { Roster }