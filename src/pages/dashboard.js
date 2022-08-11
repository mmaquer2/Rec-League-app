
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
import {OverviewCard} from "../user-account-components/overviewCard"

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
    var user = auth.currentUser;

    // fetch user data and pass it to the correct properties in the sidebar

    /*

  
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



    */


    
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
      </Grid>
    </Box>
  

    </div>
    
    <Footer></Footer>
    </>
    )

}

export { Dashboard }