
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Account(props){

    const [username, setUserName] = useState("");
    const [newTeamName, setTeamName] = useState("")

    const auth = getAuth(app);
    const db = getFirestore(app);

    const [openCreateTeam, setOpenTeam] = useState(false);
    const [openUpdateAccount, setOpenUpdateAccount] = useState(false); 

    const handleClickOpen = () => {
        setOpenTeam(true);
    };

    const handleClose = () => {
        setOpenTeam(false);
    };


    const handleOpenAccount = () => {

        setOpenUpdateAccount(true);
    }

    const handleCloseAccount = () => {
        setOpenUpdateAccount(false);
    }


    function startCreateTeamAction(){

        setOpenTeam(false);

        /*
        if(newTeamName !==""){
            createTeam(newTeamName);
        }
        */


    }

    async function createTeam(newTeamName){

        await setDoc(doc(db,"teams", newTeamName), {
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

        setOpenUpdateAccount(false)
        console.log("Update user info test");

    }

    //TODO: implement forgot password modal
    function openForgotPasswordModal(){


    }
    
    //TODO: implement modal for user info and 

    return (<>

    <SideBar></SideBar>
    

    <div className="account-container">
        <h3>Your Account</h3>
        <p> email: </p>
        <p>username: </p>

        
        <Dialog open={openCreateTeam} onClose={handleClose}>
        <DialogTitle>Create new team</DialogTitle>
        <DialogContent>
        <DialogContentText>
        Enter the new team name
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="team"
            type="text"
            fullWidth
            variant="standard"
        />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={startCreateTeamAction}>Create Team</Button>
        </DialogActions>
        </Dialog>

    <Button variant="contained" sx={{m:2, width:250}}onClick={handleClickOpen}> Create Team </Button>

       
      
      <Divider variant="middle" />
      
      <Dialog open={openUpdateAccount} onClose={handleClose}>
        <DialogTitle>Update Account Data</DialogTitle>
        
        <DialogContent>
        <p>change username:</p>
        <TextField id="filled-basic" label = "username" ></TextField>
        <p>change email:</p>
        <TextField id="filled-basic" label = "email" ></TextField>
        <p>submit account changes: </p>
        <Button variant="contained" sx={{width:250}}onClick = {updateUserInfo}> Update Info </Button>
        </DialogContent>


        <DialogActions>
          <Button onClick={handleCloseAccount}>Cancel</Button>
          <Button onClick={updateUserInfo}>Update Account Info</Button>
        </DialogActions>
      </Dialog>


      <Button variant="contained" sx={{ m:2, width:250}}onClick={handleOpenAccount}> Update Account Info </Button>

      <Button variant="contained" sx={{m:2, width:250}}onClick={openForgotPasswordModal}> Change Password </Button>
        
        
    
    
    </div>
    
    <Footer></Footer>
    </>)

}

export { Account } 