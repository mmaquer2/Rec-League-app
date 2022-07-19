
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


// firebase imports 
import { getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import { doc, getDoc } from "firebase/firestore";

// Component imports 
import { Footer } from "../nav-components/footer"
import { SideBar } from "../nav-components/sideBar"
import {StatsCard} from "../user-account-components/statsCard"

// Material UI imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


function Dashboard(props){
    // check if the user is already logged in
    const auth = getAuth(app);
    const db = getFirestore(app);
    //const { state } = useLocation();
    //const { userID, testData } = state; // Read values passed on state
    var user = auth.currentUser;

    const [username, setUserName] = useState("");
    const [userTeams, setUserTeams] = useState([]);
    

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



    
    return(
    <>

    <SideBar></SideBar>

    <div className="dashboard-container">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <h3>Welcome { username }</h3>
        <div><p>Your Teams:</p></div>
        {userTeams.map((item) => (
          <li>{item}</li>
        ))}
        </Grid>
        <Grid item xs={6} md={4}>
        <StatsCard></StatsCard>
        </Grid>
      </Grid>
    </Box>
  

    </div>
    
    <Footer></Footer>
    </>
    )

}

export { Dashboard }