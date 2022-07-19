
import { useState, useEffect } from "react"
import { SideBar } from "../nav-components/sideBar";

import {StatsCard} from "../user-account-components/statsCard"

function Account(props){

    const [username, setUserName] = useState("");




    return(
    <>

    <SideBar></SideBar>
    
    <div className="account-container">
        <h3>Your Account</h3>

        <p>create a new team?</p>
        <p>edit your information?</p>
        <p>change your password?</p>
    </div>

  
    </>
    )

}

export { Account } 