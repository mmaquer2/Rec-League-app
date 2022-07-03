
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import { toast } from 'react-toastify';
import { doc, getDoc } from "firebase/firestore";
import { Footer } from "../components/footer"
import { SideBar } from "../components/sideBar"

function Dashboard(props){
    // check if the user is already logged in
    const auth = getAuth(app);
    const db = getFirestore(app);
    let navigate = useNavigate();
    //const { state } = useLocation();
    //const { userID, testData } = state; // Read values passed on state
    var user = auth.currentUser;

    const [teammates, setTeammats] = useState([]);
    const [username, setUserName] = useState("");
    const [userObj, setUserObj] = useState({});

    //store username into local storage
    useEffect(function persistUsername() {
        getUserData();
    }, []);


    async function getUserData(){
        
        const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
        const docSnap = await getDoc(userDocRef); // get the document with the user UID
        
        console.log(docSnap.data().username);
        const userObject = docSnap.data();
        setUserName(userObject.username);

    }


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
        <h3>Welcome Back { username }</h3>

        


    </div>
    
    <Footer></Footer>
    </>
    )

}

export { Dashboard }