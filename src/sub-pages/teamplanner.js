import { useState, useEffect } from "react"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function GamePlanner() {

    const [teamPlayers, setTeamPlayers] = useState([])
    const [rightCorner, setRightCornerTaker] = useState('');
    const [leftCorner, setLefttCornerTaker] = useState('');

    const [pentalyTaker, setPentalyTaker] = useState('');
    let freeKickPriority = [];


     // handle the change of the select element 
    const handleChangeRightCorner = (event) => {
        setRightCornerTaker(event.target.value)
    }

    const handleChangeLeftCorner = (event) => {
        setLefttCornerTaker(event.target.value);
    }


    // submit the currently set piece takers to the database
    function submitSetPieceTakers(){
        // get team document 

        // update the team document with set piece takers info


        // resubmit document to the database 

    }


    // open the new play modal for the digital clipboard
    function createNewPlay(){


    }


    function fetchTeamPlayers(){


    }

    
    // create a new formation, which this creates a set of empty slots for the players to be dropped
    // into using the react-dnd "drag and drop framework"
    function createFormation(){


    }

    // choose formation
    // game type 11v1, 7v7, 6v7  
    // 4-4-2 
    // 3-5-2
    



    return(<>
    
    
    <div className="set-pieces-container">
                
    <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Assign Left Corner Taker</InputLabel>
            <Select
                value={rightCorner}
                label="Select Team to View"
                onChange={handleChangeLeftCorner}>
                {teamPlayers.map((item) => (
                <MenuItem key ={item.name} value = {item}> {item}</MenuItem>))}
            </Select>
            </FormControl>
        </Box>

        <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Assign Right Corner Taker</InputLabel>
            <Select
                value={rightCorner}
                label="Select Team to View"
                onChange={handleChangeRightCorner}>
                {teamPlayers.map((item) => (
                <MenuItem key ={item.name} value = {item}> {item}</MenuItem>))}
            </Select>
            </FormControl>
        </Box>

        
        
        <Button variant="contained" sx={{width:250}} onClick = {submitSetPieceTakers}> Submit Changes </Button>


    </div>


    <div className="roster-container">

    



    </div>




    <div className="field-group">



    </div>
    
    
    
    
    </>)

}


export { GamePlanner}