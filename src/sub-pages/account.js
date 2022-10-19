
import { useState, useEffect } from "react"


import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import {doc, getDoc, setDoc} from "firebase/firestore";
import { app } from "../firebase-config"


import { SideBar } from "../nav-components/sideBar";
import { Footer } from "../nav-components/footer"

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

/*

    Account Page:
    this account displays the number of


 */



function Account(props){

    const [username, setUserName] = useState("");
    const [userTeams,setUserTeams] = useState([]);
    const [newTeamName, setTeamName] = useState("")

    const [selectedTeam, setSelectedTeam] = useState('');
    const [teamRoster, setTeamRoster] = useState([])
    const [rows,setTableRoster] = useState([])
    const [dateRows, setScheduleData] = useState([]);
    const [gameDates, setGameDates] = useState([]);


    const [teamPlayers, setTeamPlayers] = useState([]);
    const [teamSchedule, setTeamSchedule] = useState([]);
    const [teamStatistics,setTeamStats] = useState([]);


    const auth = getAuth(app);
    const db = getFirestore(app);
    const user = auth.currentUser;


    //TODO: force log out and nav to login page if user is not logged, or UID is lost
    if(!user){
        console.log("User is not logged in");
    }

    //store username into local storage
    useEffect(function persistUsername() {
        getUserData();
    }, []);



    // handle the change of the select element
    const handleChange = (event) => {
        setSelectedTeam(event.target.value)
    }


    async function selectViewableTeam(){
        const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
        const docSnap = await getDoc(userDocRef);

        let data = {
            "email": docSnap.data().email,
            "stats": docSnap.data().stats,
            "username": docSnap.data().username,
            "teams": docSnap.data().teams,
            "viewTeam": selectedTeam,
        }

        if(docSnap.exists()){
            const userData =  await setDoc(doc(db, "users", user.uid), data);
            console.log("Successfully updated current viewable team");
        } else {
            console.log("ERROR: fetching user data")
        }

    }

    // fetch user team data from the DB to fill the drop-down menu
    async function getUserData(){
        const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
        const docSnap = await getDoc(userDocRef); // get the document with the user UID
        if(docSnap.exists()){
            setUserName(docSnap.data().username);
            setUserTeams(docSnap.data().teams);
        } else {
            console.log("ERROR: fetching user data")
        }
    }

    // fetch team data from selected team schedule into the state of the app
    async function getTeamData(teamName){
        if(teamName !== ""){
            const docRef = doc(db, "teams", teamName); // get Reference to the teams collection
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setTeamPlayers(docSnap.data().players);
                let emptyArray = []
                setTeamRoster(emptyArray);
                setTeamRoster(docSnap.data().players);
                setGameDates(emptyArray)
                setGameDates(docSnap.data().gameEvents);
            } else {
                console.log("Error: No such document Found in the teams collection!");
            }
        }
    }


    //TODO: Modals for create account and
    //     <Button variant="contained" sx={{ m:2, width:250}}onClick={handleOpenAccount}> Update Account Info </Button>
    //     <Button variant="contained" sx={{m:2, width:250}}onClick={handleClickOpen}> Create Team </Button>
    //     <Button variant="contained" sx={{m:2, width:250}}onClick={openForgotPasswordModal}> Change Password </Button>
    //


    return (<>

    <SideBar></SideBar>
    

    <div className="account-container">
        <h3>Your Account</h3>
        <p> email: </p>
        <p>username: </p>

        <p>Choose Current Team View: </p>
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Team to View</InputLabel>
                <Select
                    value={selectedTeam}
                    label="Select Team to View"
                    onChange={handleChange}>
                    {userTeams.map((item) => (
                        <MenuItem key ={item.name} value = {item}> {item}</MenuItem>))}
                </Select>
            </FormControl>
        </Box>

        <Button variant="contained" sx={{m:2, width:250}}onClick = {selectViewableTeam}> Select </Button>

    </div>
    <Footer></Footer>
    </>)
}

export { Account }

