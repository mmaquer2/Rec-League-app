
import '../App.css';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { app } from "../firebase-config"
import { Footer } from "../nav-components/footer"


function CreateAccount(){

    const auth = getAuth(app);
    const db = getFirestore(app);
 
    let navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [email, setEmail] = useState("");


    const startAccountProcess = () =>{
        //TODO: input validation here: 

      if(password === passwordTwo && password.length >= 6){

        createNewAccountRoute(email, password);
      }

      
    }

    const createNewAccountRoute = (newEmail, newPassword) =>  {

        createUserWithEmailAndPassword(auth, newEmail, newPassword)
        .then((userCredential) => {
          const user = userCredential.user; // get newly created 
          createUserRecord(user); // create the user path
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage)
        });

    }


    async function createUserRecord(user){
    
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        teams: {}
      }).then(()=>{
        navigate("/", { replace: true }); // navigate back to the login page
      })
      
    }

    function openForgotPasswordModal(){
      
    }


    return(<>
    

    <div className="create-account-form">
        <h3>Create new Account</h3>
        <p>password min length of six characters</p>

        <p>Email Address:</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="name@site.com" variant="filled" onChange={e => setEmail(e.target.value)} />
        <p>Username:</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="username" variant="filled" onChange={e => setUserName(e.target.value)} />
        <p>Password:</p>
        <TextField type = "password" sx={{ width: 500 }} id="filled-basic" label="********" variant="filled" onChange={e => setPassword(e.target.value)}  />
        <p>Re Enter Password:</p>
        <TextField type = "password" sx={{ width: 500 }} id="filled-basic" label="********" variant="filled" onChange={e => setPasswordTwo(e.target.value)}  />
        
        <p onClick={openForgotPasswordModal}>Forgot password?</p>
        
        <Button variant="contained" sx={{width:500}}onClick = {startAccountProcess}> Submit </Button>




    </div>
    

    <Footer></Footer>
    </>)




}

export { CreateAccount}