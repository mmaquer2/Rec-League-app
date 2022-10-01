

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import {useState} from "react";
import Button from "@mui/material/Button";


function AddPlayerModal(){

    const [openCreatePlayer, setOpenPlayer] = useState(false);
    const [openUpdateAccount, setOpenUpdateAccount] = useState(false);

    const [playerName, setPlayerName] = useState("");
    const [playerEmail, setPlayerEmail] = useState("");


    function openAddPlayerModal(){
        setOpenPlayer(true);
    }

    function addNewPlayer(name, email){
        handleCloseAddPlayer();




    }

    const handleCloseAddPlayer = () => {
        setOpenPlayer(false);
    };


    return(<>

        <Dialog open={openCreatePlayer} onClose={handleCloseAddPlayer}>

            <DialogTitle>Add New Player</DialogTitle>
            <DialogContent>
                <p>Player Name:</p>
                <TextField id="filled-basic" onChange={e=>setPlayerName((e.target.value))} label = "Name" ></TextField>
                <p>Player Email:</p>
                <TextField id="filled-basic"  onChange={e => setPlayerEmail(e.target.value)} label = "E-mail" ></TextField>
            </DialogContent>


            <DialogActions>
                <Button onClick={handleCloseAddPlayer}>Cancel</Button>
                <Button onClick={addNewPlayer(playerName,playerEmail)}>Add New Player</Button>
            </DialogActions>
        </Dialog>


    </>)

}

export {AddPlayerModal}