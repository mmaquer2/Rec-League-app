
import { useState, useEffect } from "react"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {app} from "../firebase-config";
import {getFirestore} from "@firebase/firestore";


const AddPlayerModal = () => {

    const [openCreatePlayer, setOpenPlayer] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");

    const auth = getAuth(app);
    const db = getFirestore(app);

    //open the dialog based on the prop status
    function openAddPlayerModal(){
        setOpenPlayer(true);
    }

    const handleCloseAddPlayer = () => {
        setOpenPlayer(false);
    };


    async function addNewPlayer(){

        if(playerName === ""){

            console.log("ERROR: cannot add player, empty name input")


        } else {

            console.log("added new player: " + playerName)
            console.log("new player position: " + playerPosition)

            const newPlayer =
                { "position": playerPosition,
                    "role": "player",
                    "username": playerName
                }

            //TODO: change this get the current view team state
            let testTeam = "Chelsea FC"
            const teamRef = doc(db, "teams", testTeam); // get Reference to team data collection
            const docTeam = await getDoc(teamRef);

            let currentRoster = docTeam.data().players; // add player to the roster
            currentRoster.push(newPlayer);

            const updatedTeam = {}

            // update team roster
            // await setDoc(doc(db, "teams", teamName), updatedTeam); //set the team doc with the updated value
        }


        handleCloseAddPlayer(); //close player

    }

    return(<>

        <Dialog open={openCreatePlayer} onClose={handleCloseAddPlayer}>

            <DialogTitle>Add New Player</DialogTitle>
            <DialogContent>
                <p>Player Name:</p>
                <TextField id="filled-basic" onChange={e=>setPlayerName((e.target.value))} label = "Name" ></TextField>
                <p>Player Email:</p>
                <TextField id="filled-basic"  onChange={e => setPlayerEmail(e.target.value)} label = "E-mail" ></TextField>
                <p>Position:</p>
                <TextField id="filled-basic"  onChange={e => setPlayerPosition(e.target.value)} label = "Position" ></TextField>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseAddPlayer}>Cancel</Button>
                <Button onClick={addNewPlayer}>Add New Player</Button>
            </DialogActions>
        </Dialog>


        <Button variant="contained" sx={{m:2, width:250}} onClick = {openAddPlayerModal}> Add Player </Button>

    </>)

}

export { AddPlayerModal }