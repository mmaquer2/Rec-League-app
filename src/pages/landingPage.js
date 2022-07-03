
import '../App.css';

import { useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase-config"
import { Link } from "react-router-dom";

import { Dashboard } from "./dashboard"
import { Footer } from "../components/footer"

import { ToastContainer, toast } from 'react-toastify';
import { create } from '@mui/material/styles/createTransitions';


function LandingPage(){

    const auth = getAuth(app);
    let navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [createAccountDialogOpen, accountDialogOpen] = useState(false);
    const [forgotPasswordDialogOpen, passwordDialogOpen] = useState(false);

   
    const loginUser = async () => {
        
        if(username.length !== 0 && password.length !==0) {
            await signInWithEmailAndPassword (auth,username,password).then(cred => {
                const user = cred.user;
                console.log("used has been logged in", user.uid)
            
                const tempUid = user.uid;

                navigate("../dashboard", { replace: true });
                
                // if successfully logged in...
                //navigate to the dashboard page the UID is props


    
              }).catch(error => {
                console.log(error)
              })

        } else {

            console.log("invalid login: username was blank")

            toast.error("Username and password cannot be empty! !", {
                position: toast.POSITION.TOP_LEFT
              });
        
        }


    }


    const openCreateNewAccountModal = async () => {

        const username = ""
        const email = ""
        const passwordOne = ""
        const passwordTwo = ""

        createNewAccountRoute(email, passwordOne)

        // add username and db to users reference



    }


    const createNewAccountRoute = (email, password) =>  {

        createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
            
            console.log("Successfully created new user account")
            
          }).catch((error) => {
            console.log(error)

          });

    }



    const openForgotPasswordModal = async () => {


    }

    return(
    <>
    <h3> Manage your soccer teams in one place </h3>
    <p> Login Here:</p>
    <div className="login-form">
    
        <p>Email Address</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="name@site.com" variant="filled" onChange={e => setUserName(e.target.value)} />
        <p>Password:</p>
        <TextField type = "password" sx={{ width: 500 }} id="filled-basic" label="********" variant="filled" onChange={e => setPassword(e.target.value)}  />
        <p>Forgot password?</p>
        
        <Button variant="contained" sx={{width:500}}onClick = {loginUser}> submit </Button>

        <p>Not a memeber? create an account. </p> 
    </div>
    <Footer></Footer>
   
    
    </>
    )



}

export {LandingPage}

