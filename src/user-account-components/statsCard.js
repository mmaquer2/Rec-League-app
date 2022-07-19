
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useState, useEffect } from "react"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import { doc, getDoc } from "firebase/firestore";


function StatsCard() {

  const auth = getAuth(app);
  const db = getFirestore(app);
  var user = auth.currentUser;

  const [gamesPlayed, setGamesPlayed] = useState("");
  const [goalsScored, setGoal] = useState("");
  const [assistsMade, setAssists] = useState("");
  

  async function fetchUserStats(){
    const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
    const docSnap = await getDoc(userDocRef);
    if(docSnap.exists()) {
      console.log(docSnap.data())
      //docSnap.data().goals;
      //docSnap.data().assists;
      //docSnap.data

    } else{

      console.log("there was a problem fetching user stats")
    }


  }


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
            <CardContent>
              <h3>Your Stats:  </h3>
              <p>Games Played: {gamesPlayed} </p>
              <p>Goals Scored: {goalsScored}</p>
              <p>Assists Made: {assistsMade}</p>
            </CardContent>
    
            </React.Fragment>
      </Card>
    </Box>
  );
}


export { StatsCard }