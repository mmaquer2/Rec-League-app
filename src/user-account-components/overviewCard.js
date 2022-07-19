
import * as React from 'react';
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import { doc, getDoc } from "firebase/firestore";


function OverviewCard() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  var user = auth.currentUser;

  const [username, setUserName] = useState("");
  const [userTeams, setUserTeams] = useState([]);
  

  //store username into local storage
  useEffect(function persistUsername() {
      getUserData();
  }, []);

  // fetch user team realted to the user overview card
  async function getUserData(){
    const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
    const docSnap = await getDoc(userDocRef); // get the document with the user UID
    setUserName(docSnap.data().username);
    setUserTeams(docSnap.data().teams);
  
  }


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
            <CardContent>
            <h3>Welcome { username }</h3>
            <h3>Your Teams:</h3>
            {userTeams.map((item) => (
              <li>{item}</li>
            ))}
            </CardContent>
            </React.Fragment>
      </Card>
    </Box>
  );
}


export { OverviewCard}