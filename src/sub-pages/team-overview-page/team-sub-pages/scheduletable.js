import {useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


const ScheduleTable = ({gameEvents}) => {

    const [dateRows, setScheduleData] = useState([]);

    useEffect(()=>{
        if(gameEvents !== undefined && gameEvents.length > 0){
            console.log("rendered team schedule table")
            console.log("Game Events from table component:" + gameEvents)
            persistTeamSchedule(gameEvents);
        }
    }, []);


    function createGameEventRow(date, time, location , opponent) {
        return {date, time, location , opponent};
    }

    function persistTeamSchedule(dates){
        let tempRows = []
        if(dates.length > 0){
            dates.forEach((value, key)=>{
                tempRows.push(createGameEventRow(value.date,value.time,value.location,value.opponent))
            });
        }
        setScheduleData(tempRows);
    }

    function deleteRow(){

    }

    function updateRow(){

    }

    // TODO: delete a row from the event table
    // TODO: edit a row from a table

    return(<>

        <p>Up Coming games:</p>
        <TableContainer component={Paper}>
            <Table sx={{ m:2, minWidth: 450 }} size = "small" datalabel-id = "upcoming-games" aria-label="team-upcoming-games">
                <TableBody>
                    {dateRows.map((row,key) => (
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
    </>)

}


export { ScheduleTable }