import {useState, useEffect} from "react"


function SideBar(props){

    const [username, setUserName] = useState("");
    const [showHome,homeSwitch] = useState(true);
    const [showSettingsMenu, settingsSwitch] = useState(false);
    const [showMessages, messagesSwitch] = useState(false);
    const [showSchedule, scheduleSwitch] = useState(false);


    const menuItems = {

        "Home": { icon: "", route: "route"},
        "Messages": { icon: "", route: "route"},
        "Scheudle": { icon: "", route: "route"},
        "Settings": { icon: "", route: "route"},


    }




    return(
    <>
    
    
    </>
    )


}

export {SideBar}