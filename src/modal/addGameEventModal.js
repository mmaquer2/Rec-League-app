import { useState, useEffect } from "react"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


const AddGameEventModal = () => {

    const [status, setOpen] = useState(false);
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventLocation, setEventLocation] = useState("");

    function open(){ setOpen(true); }

    function close(){ setOpen(false);}

    function addNewGameEvent(){
        const newEvent = {

        }

        //TODO: post new event to DB

        close(); // close modal after posting data

    }


    return(<>



        <Button variant="contained" sx={{m:2, width:250}} onClick = {open}> Add Game Event </Button>


    </>)

}

export {AddGameEventModal}