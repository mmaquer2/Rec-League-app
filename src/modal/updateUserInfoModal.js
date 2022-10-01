import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";


function UpdateUserInfoModal(){



    //TODO: implement forgot password modal
    function openForgotPasswordModal(){


    }


    //TODO: change username and password


    return(<>

        <Dialog open={openUpdateAccount} onClose={handleClose}>
            <DialogTitle>Update Account Data</DialogTitle>

            <DialogContent>
                <p>change username:</p>
                <TextField id="filled-basic" label = "username" ></TextField>
                <p>change email:</p>
                <TextField id="filled-basic" label = "email" ></TextField>
                <p>submit account changes: </p>
                <Button variant="contained" sx={{width:250}}onClick = {updateUserInfo}> Update Info </Button>
            </DialogContent>


            <DialogActions>
                <Button onClick={handleCloseAccount}>Cancel</Button>
                <Button onClick={updateUserInfo}>Update Account Info</Button>
            </DialogActions>
        </Dialog>


    </>)

}

export {UpdateUserInfoModal}