
import { useState, useEffect } from "react"
import { SideBar } from "../nav-components/sideBar";

import {StatsCard} from "../user-account-components/statsCard"

function Account(props){

    const [username, setUserName] = useState("");




    return(
    <>

    <SideBar></SideBar>
    <p>select current team view</p>
    <p>edit your information</p>
    <p>change your password?</p>

    </>
    )

}

export {Account} 