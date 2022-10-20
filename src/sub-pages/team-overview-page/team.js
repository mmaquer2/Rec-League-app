
import { useState, useEffect } from "react"
import {SideBar} from "../../nav-components/sideBar"

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase-config"
import { doc, getDoc } from "firebase/firestore";

import Button from '@mui/material/Button';


// team view components:
import {PlayerTable} from "./team-sub-pages/playertable";
import {ScheduleTable} from "./team-sub-pages/scheduletable";
import {AddPlayerModal} from "../../modal/addPlayerModal";
import {AddGameEventModal} from "../../modal/addGameEventModal";

function Team(){

    const [teamRoster, setTeamRoster] = useState([])
    const [teamSchedule, setTeamSchedule] = useState([])

    const [userViewTeam, setCurrentViewTeam] = useState('')

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
        //setTeamSchedule(docTeam.data().)

        console.log(docTeam.data().players)
    }


    // todo: fix padding of footer so all elements are visible:
    // <Footer></Footer>

    return(<div>

        <SideBar></SideBar>

        <h3>Team Name: {userViewTeam} </h3>

         <AddPlayerModal />
         <AddGameEventModal />

        {teamRoster.length > 0 &&
            <PlayerTable roster = {teamRoster}></PlayerTable>
        }

        {teamSchedule.length > 0 &&
            <ScheduleTable gameEvents={teamSchedule}></ScheduleTable>
        }


    </div>)

}

export { Team }