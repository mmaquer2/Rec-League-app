import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"

//ICONS
import SvgIcon from '@mui/material/SvgIcon';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import Groups from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BarChartIcon from '@mui/icons-material/BarChart';

function SideBar(props) {


    //TODO: pop up dialog for verifying log out action 

    const auth = getAuth(app);
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
        navigate("/dashboard", { replace: true });

    
    }

    function openAccountPage(){
        navigate("/Account", { replace: true });

    }

    function openMessagePage(){
       navigate("/Messages", { replace: true });
    }

    function openTeamPage(){
       navigate("/Teams", { replace: true });

    }

    function openPlannerPage(){
        navigate("/GamePlanner", { replace: true });

    }

    function openScoreKeeperPage(){
        navigate("/ScoreKeeper", { replace: true });
    }

    function openDataManagerPage(){
        navigate("/DataManager", {replace:true});
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
         
          <MenuIcon fontSize = "large" onClick={toggleDrawer(anchor, true)}></MenuIcon>
          
          <Drawer anchor={'left'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Home"} onClick={openHomePage} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Account"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Account"} onClick={openAccountPage} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Messages"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <EmailIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Messages"} onClick={openMessagePage} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Manager"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Groups fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Manage Teams"} onClick={openTeamPage} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"PLanner"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContentPasteIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Game Planner"} onClick={openPlannerPage} />
            </ListItemButton>
          </ListItem>


          <ListItem key={"Scorekeeper"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ScoreboardIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"Scorekeeper"} onClick={openScoreKeeperPage} />
            </ListItemButton>
          </ListItem>

              <ListItem key={"DataManager"} disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                          <BarChartIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={"DataManager"} onClick={openDataManagerPage} />
                  </ListItemButton>
              </ListItem>

          <ListItem key={"Log Out"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon fontSize="large" />
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