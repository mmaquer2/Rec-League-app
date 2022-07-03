
import '../App.css';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase-config"
import { Footer } from "../components/footer"
import { toast } from 'react-toastify';


function LandingPage(){

    const auth = getAuth(app);
    let navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

   
    const loginUser = async () => {
        let user;
        if(username.length !== 0 && password.length !==0) {
            await signInWithEmailAndPassword (auth,username,password).then(cred => {
                user = cred.user;
                }).catch(error => {
                
                // TODO: Toast Message on login failure
                console.log(error)

              }).then(() => {

                // navigate to the dashboard page the UID in props
                navigate("../dashboard", { state: { userID: user.uid}}, { replace: true });
            })

        } else {

            console.log("invalid login: username was blank")
            toast.error("Username and password cannot be empty! !", {
                position: toast.POSITION.TOP_LEFT
              });
        
        }


    }

    // TODO: create account Route 
    const openCreateNewAccountPage = async () => {

       // navigate("../createAccount",  { replace: true });

    }



    // TODO: configure forgot password route
    const openForgotPasswordPage = async () => {

        // navigate("../resetPassword",  { replace: true });

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

