
import { useState, useEffect } from "react"
import {SideBar} from "../nav-components/sideBar"

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import { doc, getDoc } from "firebase/firestore";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


// team view components:
import {TeamOverview } from "../team-view-components/teamOverview"
import { Roster } from "../team-view-components/roster"
import { Schedule } from "../team-view-components/schedule"
import {AddPlayerModal} from "../modal/addPlayerModal";
import { Footer } from "../nav-components/footer"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import {getUserViewableTeam} from "../db/CRUD";

function Team(props){

    const [teamRoster, setTeamRoster] = useState([])
    const [rows,setTableRoster] = useState([])
    const [dateRows, setScheduleData] = useState([]);
    const [gameDates, setGameDates] = useState([]);
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [teamSchedule, setTeamSchedule] = useState([]);
    const [teamStatistics,setTeamStats] = useState([]);
    const [userViewTeam, setCurrentViewTeam] = useState('')

    const auth = getAuth(app);
    const db = getFirestore(app);
    const user = auth.currentUser;

    useEffect(()=>{
        if(userViewTeam === ''){
            fetchViewTeam();
        }
    }, []);


    async function fetchViewTeam(){
        const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
        const docSnap = await getDoc(userDocRef);
        setCurrentViewTeam(docSnap.data().viewTeam);

    }


    async function fetchTeamData(){

        const teamRef = doc(db, "teams", userViewTeam); // get Reference to the users collection
        const docSnap = await getDoc(teamRef);

        //TODO:
        setTeamRoster(docSnap.data().players);
        console.log("Team players: " + teamRoster);
        //persistTeamPlayers();
        //persistTeamSchedule();

    }


    // create format data for the team roster table
    function createPlayerTableRow(username, position, role, number) {
        return { username, position, role, number};
    }

   // place player data in the roster table
   function persistTeamPlayers() {
        
        let tempRow = []
        console.log("team roster list" + teamRoster)
        if(teamRoster.length > 0){
             //iterate through props.players, set the table values 
            teamRoster.forEach((value, key) =>{
            tempRow.push(createPlayerTableRow(value.username, value.position, value.role,"1"));
        })
        }
     setTableRoster(tempRow)
   }


    function createTableDate(date, time, location , opponent) {
      return {date, time, location , opponent};
    }
  
    function persistTeamSchedule(){
      let tempRows = []
      if(gameDates.length > 0){
        gameDates.forEach((value, key)=>{
            tempRows.push(createTableDate(value.date,value.time,value.location,value.opponent))
        });
     }
      setScheduleData(tempRows);
  
    }

    //TODO:
    // How to open a modal from clicking on another state
    //<Button variant="contained" sx={{width:250}}onClick = {openAddPlayerModal}> Add Player </Button>
    //<AddPlayerModal></AddPlayerModal>

    return(<>


    <SideBar></SideBar>
        <h3>Team Name: {userViewTeam} </h3>
        <h4>Team Summary: </h4>
        <p>Form: </p>

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

        <Footer></Footer>
            
    </>)

}

export { Team }