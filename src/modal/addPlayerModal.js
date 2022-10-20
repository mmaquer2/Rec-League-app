
import { useState, useEffect } from "react"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


const AddPlayerModal = () => {

    const [openCreatePlayer, setOpenPlayer] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [playerEmail, setPlayerEmail] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");

    //open the dialog based on the prop status
    function openAddPlayerModal(){
        setOpenPlayer(true);
    }

    const handleCloseAddPlayer = () => {
        setOpenPlayer(false);
    };


    function addNewPlayer(){
        const newPlayer = {
            name: playerName,
            email:playerEmail,
        }

        console.log("added new player: " + playerName)
        console.log("added new player email: " + playerName)
        console.log("added new player email: " + playerPosition)

        //get team name

        //update team document

        //send document update to firebase db

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