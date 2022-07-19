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

function Settings(props){

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    

    const updateAccountInfo = () =>{



    }

    const changeEmail = () => {




    }

    const changePassword = () =>{



    }


    return(<>

        <div className="update-account-form">

        <p>Change Email Address</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="name@site.com" variant="filled" onChange={e => setUserName(e.target.value)} />
        <p>Change Username</p>
        <TextField id="filled-basic"  sx={{ width: 500 }}  label="name@site.com" variant="filled" onChange={e => setUserName(e.target.value)} />
    
        <p>Change Password:</p>
        <TextField type = "password" sx={{ width: 500 }} id="filled-basic" label="********" variant="filled" onChange={e => setPassword(e.target.value)}  />
        
        <p>Forgot password? Request reset link.</p>

        <Button variant="contained" sx={{width:500}}onClick = {updateAccountInfo}> Update Account </Button>


        </div>
    
    
    
    
    <Footer></Footer>
    </>)


}

export {Settings}