
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



// firebase imports
import { getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app, db } from "../firebase-config"
import { doc, getDoc, addDoc, setDoc } from "firebase/firestore";

import {teams} from "../db/database-test-data"

// Component imports 
import { Footer } from "../nav-components/footer"
import { SideBar } from "../nav-components/sideBar"
import {StatsCard} from "../user-account-components/statsCard"
import {OverviewCard} from "../user-account-components/overviewCard"

// Material UI imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";



function Dashboard(props){
    // check if the user is already logged in
    const auth = getAuth(app);
    const db = getFirestore(app);
    var user = auth.currentUser;

    // fetch user data document
    /*
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

     */


    async function handleTestImportData() {

        let test = teams["fcTulsa"];
        let test2 = teams["chelsea"]

        //import test team collections new collection
        try {
             const team1 = await setDoc(doc(db, "teams", "FC Tulsa"), test);
             const team2  =  await setDoc(doc(db, "teams", "Chelsea FC"), test2);
            console.log("Document written");
        } catch (e) {
            console.error("Error adding document: ", e);
        }


        //import previous game data


        //import team schedule data

        //import team formations

        // import



    }





    
    return(
    <>

    <SideBar></SideBar>

    <div className="dashboard-container">
    <Box sx={{ flexGrow:120 }}>
      <Grid container spacing={12}
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
        <Grid item xs={5} md={5}>
        <OverviewCard></OverviewCard>
        </Grid>
        <Grid item xs={5} md={5}>
        <StatsCard></StatsCard>
        </Grid>

          <Button variant="contained" sx={{m:2, width:250}}onClick={handleTestImportData}> Import Test Data </Button>



      </Grid>
    </Box>
  

    </div>
    
    <Footer></Footer>
    </>
    )

}

export { Dashboard }