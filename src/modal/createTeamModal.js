import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {doc, setDoc} from "firebase/firestore";


function CreateTeamModal(){

    //TODO: implement update user info
    function updateUserInfo(){

        setOpenUpdateAccount(false)
        console.log("Update user info test");

    }

    //TODO: implement forgot password modal
    function openForgotPasswordModal(){


    }



    const handleOpenAccount = () => {

        setOpenUpdateAccount(true);
    }

    const handleCloseAccount = () => {
        setOpenUpdateAccount(false);
    }

    async function createTeam(newTeamName){

        await setDoc(doc(db,"teams", newTeamName), {
            manager: "",
            players: {},
            team_name: newTeamName

        }).then(() =>{
            console.log("Team created")
        }).catch((error) =>{
            console.log(error)
        })


    }


    return(<>
        <Dialog open={openCreateTeam} onClose={handleClose}>
            <DialogTitle>Create new team</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter the new team name
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="team"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={startCreateTeamAction}>Create Team</Button>
            </DialogActions>
        </Dialog>



    </>)

}