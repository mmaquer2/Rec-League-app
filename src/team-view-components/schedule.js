
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
// component to show the schedule of the team
function Schedule(props){

  const [rows, setScheduleData] = useState([]);
  const [gameDates, setGameDates] = useState([]);

  function createTableDate(date, time, location , opponent) {
    return {date, time, location , opponent};
  }

  function setTableData(){
    setGameDates(props.teamSchedule);
    let tempRows = []

    gameDates.forEach((value, key)=>{
      tempRows.push(createTableDate(value.date,value.time,value.location,value.opponent))
    });

    setScheduleData(tempRows);

  }
  



    
    return(
    <>

    <p>Team Schedule:</p>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell >{row.location}</TableCell>
              <TableCell >{row.opponent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </>
  )

}

export { Schedule}



