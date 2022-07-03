
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import { toast } from 'react-toastify';
import { Footer } from "../components/footer"
import { SideBar } from "../components/sideBar"

function Dashboard(props){
    // check if the user is already logged in

    const auth = getAuth(app);
    const db = getFirestore(app);
    let navigate = useNavigate();

    const { state } = useLocation();
    const { userID, testData } = state; // Read values passed on state
    var user = auth.currentUser;
    if(user){
        console.log("user is already logged in")
    } else{
        console.log("user is not signed in")
        navigate("/", { replace: true }); // navigate back to the login page
        
    }
    const [teammates, setTeammats] = useState([]);
    const [username, setUserName] = useState("");

    // fetch user info
    var user_ref = db.collection("users").document(user.uid);

    console.log(user_ref);

    //store username into local storage
    useEffect(function persistUsername() {
        setUserName("test test test");
    }, []);


    //populate team data
    // if no teams exist, show join teams option

    const logoutUser = async () => { 
        await auth.signOut().then(() => {
          console.log("user has logged out")
        }).then(() => {
            navigate("/", { replace: true }); // navigate back to the login page
        })
    }


    return(
    <>

    <div className="dashboard-Container">
        <h3>Welcome Back { userID }</h3>

        


    </div>
    
    <Footer></Footer>
    </>
    )

}

export { Dashboard }