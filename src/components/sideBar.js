import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"


function SideBar() {

    //TODO: Icons for the sidebar menu items

    const auth = getAuth(app);
    const db = getFirestore(app);
    let navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


 
    function openHomePage(){
        navigate("/", { replace: true });

    
    }

    function openAccountPage(){
        //navigate("/Account", { replace: true });

    }

    function openMessagePage(){
       // navigate("/Messages", { replace: true });
    }

    function openTeamPage(){
       // navigate("/Team", { replace: true });

    }

    const logoutUser = async () => { 
        await auth.signOut().then(() => {
        console.log("user has logged out")
        }).then(() => {
            navigate("/", { replace: true }); // navigate back to the login page
        })
    }


  return (
    <div className="sidebar-container">
      {['left'].map((anchor) => (
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
          
          <Drawer anchor={'left'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={"Home"} onClick={openHomePage} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Account"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={"Account"} onClick={openAccountPage} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Messages"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={"Messages"} onClick={openMessagePage} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Team"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={"Team"} onClick={openTeamPage} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Log Out"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary={"Log Out"} onClick={logoutUser} />
            </ListItemButton>
          </ListItem>




          </Drawer>



        </React.Fragment>
      ))}
    </div>
  );
}


export { SideBar }