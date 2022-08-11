
import { useState, useEffect } from "react"


import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { app } from "../firebase-config"


import { SideBar } from "../nav-components/sideBar";
import { Footer } from "../nav-components/footer"

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Account(props){

    const [username, setUserName] = useState("");
    const [newTeamName, setTeamName] = useState("")

    const auth = getAuth(app);
    const db = getFirestore(app);


    function startCreateTeamAction(){
        if(newTeamName !==""){
            createTeam(newTeamName);
        }
        


    }

    async function createTeam(newTeamName){

        await setDoc(doc(db,"teams",newTeamName), {
            manager: "",
            players: {},
            team_name: newTeamName

        }).then(() =>{
            console.log("Team created")
        }).catch((error) =>{
            console.log(error)
        })
    

    }

    //TODO: implement update user info 
    function updateUserInfo(){


    }

    //TODO: implement forgot password modal
    function openForgotPasswordModal(){


    }
    

    return (<>

    <SideBar></SideBar>
    
    <div className="account-container">
        <h3>Your Account</h3>

        <h4>Create a new team?</h4>

        <p>Team Name:</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="new team name" variant="filled" onChange={e => setTeamName(e.target.value)} />
        

        <Button variant="contained" sx={{width:250}}onClick = {startCreateTeamAction}> Create Team </Button>
        
        
        <h4>Edit your information?</h4>

        <Divider variant="middle" />

        <p>change username:</p>
        <TextField id="filled-basic" label = "username" ></TextField>
        <p>change email:</p>
        <TextField id="filled-basic" label = "email" ></TextField>
        <p>submit account changes: </p>
        <Button variant="contained" sx={{width:250}}onClick = {updateUserInfo}> Update Info </Button>


        <p onClick={openForgotPasswordModal}> change your password?</p>
    </div>
    
    <Footer></Footer>
    </>)

}

export { Account } 