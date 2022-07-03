
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import { Footer } from "../components/footer"
import { SideBar } from "../components/sideBar"

function Dashboard(props){
    const { state } = useLocation();
    const { userID, testData, auth } = state; // Read values passed on state

    //const db = getFirestore(app);
    //const [teammates, setTeammats] = useState([]);
    const [username, setUserName] = useState("");



    //get logged in user from firebase auth state

    //store username into local storage
    useEffect(function persistUsername() {
        setUserName("test test test");
    }, []);


    //populate team data
    // if no teams exist, show join teams option

    return(
    <>

    <div className="dashboard-Container">
        <h3>Welcome Back { userID }</h3>

        


    </div>
    
    
    </>
    )

}

export { Dashboard }