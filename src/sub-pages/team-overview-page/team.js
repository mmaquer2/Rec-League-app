
import { useState, useEffect } from "react"
import {SideBar} from "../../nav-components/sideBar"

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase-config"
import { doc, getDoc } from "firebase/firestore";

import Button from '@mui/material/Button';


// team view components:
import {TeamOverview } from "../../team-view-components/teamOverview"
import { Roster } from "../../team-view-components/roster"
import { Schedule } from "../../team-view-components/schedule"
import {AddPlayerModal} from "../../modal/addPlayerModal";
import { Footer } from "../../nav-components/footer"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import {getUserViewableTeam} from "../../db/CRUD";
import {PlayerTable} from "./team-sub-pages/playertable";
import {ScheduleTable} from "./team-sub-pages/scheduletable";

function Team(){

    const [teamRoster, setTeamRoster] = useState([])
    const [userViewTeam, setCurrentViewTeam] = useState('')

    // state of handle open and closing of modal menu's
    const [addPlayerModal, toggleAddPlayerModal] = useState(false);
    const [addGameDateModal, toggleAddGameDate] = useState(false);

    const auth = getAuth(app);
    const db = getFirestore(app);
    const user = auth.currentUser;

    useEffect(()=>{
        if(userViewTeam === ''){
            fetchViewTeam();
        }
    }, []);


    async function fetchViewTeam(){
        setCurrentViewTeam("Chelsea FC");
        let testTeam = "Chelsea FC"
        const teamRef = doc(db, "teams", testTeam); // get Reference to the users collection
        const docTeam = await getDoc(teamRef);
        setTeamRoster(docTeam.data().players);
        console.log(docTeam.data().players)
    }


    async function testOpenModal(){
        console.log("open test modal button pressed")
    }

    //TODO: conditional rendering for fetching data for tables

    //TODO: Add player modal and button
    // <Button variant="contained" sx={{width:250}}onClick = {openAddPlayerModal}> Add Player </Button>


    //TODO: add game event modal with button
    //<Button variant="contained" sx={{width:250}}onClick = {openAddPlayerModal}> Add Player </Button>


    // todo: fix padding of footer so all elements are visible:
    // <Footer></Footer>
    return(<div>

        <SideBar></SideBar>
        <h3>Team Name: {userViewTeam} </h3>

        {teamRoster.length > 0 &&
            <PlayerTable roster = {teamRoster}></PlayerTable>
        }

        <Button variant="contained" sx={{width:250}}onClick = {testOpenModal}> Test Open Modal </Button>


            
    </div>)

}

export { Team }