
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

// other components
import { Roster } from "../team-view-components/roster"
import { Schedule } from "../team-view-components/schedule"

function Team(props){

    const [username, setUserName] = useState("");
    const [userTeams, setUserTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const auth = getAuth(app);
    const db = getFirestore(app);
    var user = auth.currentUser;

    
   //store username into local storage
   useEffect(function persistUsername() {
        getUserData();
    }, []);


    async function getUserData(){        
        const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
        const docSnap = await getDoc(userDocRef); // get the document with the user UID
        setUserName(docSnap.data().username);
        setUserTeams(docSnap.data().teams);
    }

    const handleChange = (event) => {
        setSelectedTeam(event.target.value)
        getTeamData(selectedTeam);

      
  
    };
    
    async function getTeamData(teamName){

        if(teamName !== ""){
            console.log("Selected Drop Down Team Name:"+teamName)
            const docRef = doc(db, "teams", teamName);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
            } else {
              
              console.log("No such document Found in Teams!");
            }
        }
   
    

       

    }



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
                <MenuItem value=""></MenuItem>
                {userTeams.map((item) => (
                <MenuItem value = {item}> {item}</MenuItem>))}
            </Select>
            </FormControl>
        </Box>


        <Roster></Roster>
        <Schedule></Schedule>
         
    
    </>)

}

export { Team }