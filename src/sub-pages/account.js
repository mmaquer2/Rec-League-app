
import { useState, useEffect } from "react"
import { SideBar } from "../nav-components/sideBar";
import { Footer } from "../nav-components/footer"


function Account(props){

    const [username, setUserName] = useState("");

    

    return (<>
    <SideBar></SideBar>
    
    <div className="account-container">
        <h3>Your Account</h3>

        <p>create a new team?</p>
        <p>edit your information?</p>
        <p>change your password?</p>
    </div>
    
    <Footer></Footer>
    </>)

}

export { Account } 