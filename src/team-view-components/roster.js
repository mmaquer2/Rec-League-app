import * as React from 'react';
import {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Roster(props){

    const [teamRoster, setTeamRoster] = useState([])
    const [rows,setTableRoster] = useState(teamRoster)

    function createData(username, position, role, number) {
      return { username, position, role, number};
    }
    

    //TODO: how to handle changes to the table after the team state changes

  // place player data in the roster table 
   function persistTeamPlayers() {
     setTeamRoster(props.players);
      let tempRow = []
      setTableRoster([])
      //iterate through props.players, set the table values 
      teamRoster.forEach((value, key) =>{
        console.log(value)
        tempRow.push(createData(value.username, value.position, value.role,"1"));

      })
      
      setTableRoster(tempRow)
      
    }

    /*
    useEffect(function handleDataChange(){
     
      persistTeamPlayers();

    });
    */

    //<Button variant="contained" sx={{width:50}}onClick = {openAddPlayerModal}> Add Player </Button> 
    // open modal to invite player to the team.
    function openAddPlayerModal(){
      console.log("Open modal to invite player to the team");


    } 

   
    return(
    <>
    
      <p>Team Roster:</p>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align ="right">Username</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <Button variant="contained" sx={{width:250}}onClick = {openAddPlayerModal}> Add Player </Button>


    
    </>
    )

}

export { Roster }






    // test data for team roster table 
    /*
    const rows = [
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0)
    ];
    */

