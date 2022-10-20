
import { useState, useEffect } from "react"
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const PlayerTable = ({roster}) => {

    const [rows,setTableRoster] = useState([])

    useEffect(()=>{
        if(roster !== undefined && roster.length > 0) {
            console.log(roster[0])
            persistTeamPlayers(roster);
            console.log("rendered player table")
        }

    }, []);


    // create format data for the team roster table
    function createPlayerRow(username, position, role, number) {
        return { username, position, role, number};
    }

    // place player data in the roster table
    function persistTeamPlayers(rosterData) {
        let tempRow = []
        console.log("team roster list table completed")
        if(rosterData.length > 0){
            //iterate through props.players, set the table values
            roster.forEach((value, key) =>{
                tempRow.push(createPlayerRow(value.username, value.position, value.role, key));
            })
        }
        setTableRoster(tempRow)
    }



    return(<>

        <p>Team Roster:</p>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align ="right">Name</TableCell>
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

    </>)

}

export {PlayerTable}