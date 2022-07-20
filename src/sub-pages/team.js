
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

// team view components:
import {TeamOverview } from "../team-view-components/teamOverview"
import { Roster } from "../team-view-components/roster"
import { Schedule } from "../team-view-components/schedule"
import { Footer } from "../nav-components/footer"

function Team(props){

    const [username, setUserName] = useState("");
    const [userTeams, setUserTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');

    const [teamPlayers, setTeamPlayers] = useState([]);

    const auth = getAuth(app);
    const db = getFirestore(app);
    var user = auth.currentUser;

    
   //store username into local storage
   useEffect(function persistUsername() {
        getUserData();
    }, []);


    //TODO: force log out and nav to login page if user is not logged, or UID is lost

    // fetch user data document
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


    // handle the change of the select element 
    const handleChange = (event) => {
        setSelectedTeam(event.target.value)
        getTeamData(event.target.value);
    };



    async function getTeamData(teamName){

        if(teamName !== ""){
            const docRef = doc(db, "teams", teamName);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              
                setTeamPlayers(docSnap.data().players);
            
            } else {
              
              console.log("No such document Found in the teams collection!");
            }
        }

    }


    // FIXME: this component when added causes a react re render bug 
    // <TeamOverview></TeamOverview>

    return(<>
    
    <SideBar></SideBar>
    <h2>Your Teams</h2>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Team to View</InputLabel>
            <Select
                value={selectedTeam}
                label="Select Team to View"
                onChange={handleChange}>
                {userTeams.map((item) => (
                <MenuItem value = {item}> {item}</MenuItem>))}
            </Select>
            </FormControl>
        </Box>
        
        
        <Roster players = {teamPlayers} ></Roster>
        <Schedule></Schedule>
        <Footer></Footer>
            
    </>)

}

export { Team }