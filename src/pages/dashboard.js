
import { useState, useEffect } from "react"
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import { Footer } from "../components/footer"
import { SideBar } from "../components/sideBar"

function Dashboard(props){

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
        <h3>Welcome Back { username }</h3>

        


    </div>
    
    
    </>
    )

}

export { Dashboard }