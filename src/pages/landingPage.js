
import '../App.css';

import {useState} from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { app } from "../firebase-config"

import {Footer} from "../components/footer"


function LandingPage(){

    const auth = getAuth(app);

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [createAccountDialogOpen, accountDialogOpen] = useState(false);
    const [forgotPasswordDialogOpen, passwordDialogOpen] = useState(false);

   
    const loginUser = async () => {
        
        if(username && password) {
            await signInWithEmailAndPassword (auth,username,password).then(cred => {
                const user = cred.user;
                console.log("used has been logged in", user)
                //setUser(user)
                //tempUid = user.uid;
                //changedLoginStatts("true")
                
                // if successfully logged in...
                //navigate to the dashboard page the UID is props
                


              }).catch(error => {
                console.log(error)
              }).then(() => {
                // after logging in get all user teams currently in the data databse
                //fetchUserData(tempUid);
              })

        } else {

            //toast email and password cannot be empty


        }


    }


    const openCreateNewAccountModal = async () => {



    }

    const openForgotPasswordModal = async () => {



    }




    return(
    
    <>
    <h3> Manage all your soccer teams in one place</h3>
    <p>login:</p>
    <div className="login-form">
    
        <p>Email Address</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="name@site.com" variant="filled" onChange={e => setUserName(e.target.value)} />
        <p>Password:</p>
        <TextField sx={{ width: 500 }} id="filled-basic" label="********" variant="filled" onChange={e => setPassword(e.target.value)}  />
        <p>forgot password?</p>
        
        <Button variant="contained" sx={{width:500}}onClick = {loginUser}> submit </Button>

        <p>Not a memeber? create an account. </p> 
    </div>
    <Footer></Footer>
    
    
    </>
    )



}

export {LandingPage}

