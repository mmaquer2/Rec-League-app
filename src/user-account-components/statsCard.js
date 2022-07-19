
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

  const db = getFirestore(app);
  const auth = getAuth(app);
  const user = auth.currentUser;

  const [gamesPlayed, setGamesPlayed] = useState("");
  const [goalsScored, setGoals] = useState("");
  const [assistsMade, setAssists] = useState("");
     
  useEffect(function persistUsername() {
    fetchUserStats();
  }, []);


  async function fetchUserStats(){
    const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
    const docSnap = await getDoc(userDocRef);
    if(docSnap.exists()) {
      console.log("User Stats:")
      console.log(docSnap.data().stats)
      const stats = docSnap.data().stats;
      setGamesPlayed(stats.games_played);
      setGoals(stats.goals)
      setAssists(stats.assists);
    } else{
      console.log("ERROR: there was a problem fetching user stats")
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