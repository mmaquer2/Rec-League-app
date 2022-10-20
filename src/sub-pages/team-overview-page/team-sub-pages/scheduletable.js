import {useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Footer} from "../../../nav-components/footer";


const ScheduleTable = ({gameEvents}) => {

    const [dateRows, setScheduleData] = useState([]);
    const [gameDates, setGameDates] = useState([]);

    useEffect(()=>{
        if(gameDates !== undefined){
            setGameDates(gameEvents);
            console.log("rendered team schedule table")
            persistTeamSchedule();
        }


    }, []);


    function createGameEventRow(date, time, location , opponent) {
        return {date, time, location , opponent};
    }

    function persistTeamSchedule(){
        let tempRows = []
        if(gameDates.length > 0){
            gameDates.forEach((value, key)=>{
                tempRows.push(createGameEventRow(value.date,value.time,value.location,value.opponent))
            });
        }
        setScheduleData(tempRows);
    }


    return(<>

        <p>Team Schedule:</p>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {dateRows.map((row) => (
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