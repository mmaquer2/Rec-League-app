
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



function CreateAccount(){

    const auth = getAuth(app);
    let navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const createNewAccountRoute = (email, password) =>  {

        // TODO validation for input of new account...


        createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
            
            console.log("Successfully created new user account")
            
          }).catch((error) => {
            console.log(error)

          }).then(()=>{
            
            //create a new user document with their firstname, last 
            // navigate back to the login page

          });

    }





    return(<>
    

    <div className="create-account-form">
    <p>Email Address</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="name@site.com" variant="filled" onChange={e => setUserName(e.target.value)} />
        <p>Password:</p>
        <TextField type = "password" sx={{ width: 500 }} id="filled-basic" label="********" variant="filled" onChange={e => setPassword(e.target.value)}  />
        <p>Forgot password?</p>
        
        <Button variant="contained" sx={{width:500}}onClick = {createNewAccountRoute}> submit </Button>




    </div>
    

    <Footer></Footer>
    </>)




}

export { CreateAccount}