import { useState, useEffect } from "react"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TeamPlanner() {

    const [teamPlayers, setTeamPlayers] = useState([])
    const [rightCorner, setRightCornerTaker] = useState('');

     // handle the change of the select element 
     const handleChange = (event) => {
        setRightCornerTaker(event.target.value)
        
    }


    // submit the currently set piece takers to the database
    function submitSetPieceTakers(){
        // get team document 

        // update the team document with set piece takers info


        // resubmit document to the database 

    }



    function fetchTeamPlayers(){


    }

    // assign 

    // set piece takers...
    // corner left and right 

    // free kick left and right 

    // throw ins


    // goal kicks 




    // choose formation
    // game type 11v1, 7v7, 6v7  
    // 4-4-2 
    // 3-5-2
    // 



    return(<>
    
    
    <div className="set-pieces-container">
                
    <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Team to View</InputLabel>
            <Select
                value={rightCorner}
                label="Select Team to View"
                onChange={handleChange}>
                {teamPlayers.map((item) => (
                <MenuItem key ={item.name} value = {item}> {item}</MenuItem>))}
            </Select>
            </FormControl>
        </Box>


    </div>


    <div className="roster-container">

    



    </div>




    <div className="field-group">



    </div>
    
    
    
    
    </>)

}


export { TeamPlanner}