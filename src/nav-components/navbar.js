
import {useState, useEffect} from "react"


function Navbar(props){

    const [username, setUserName] = useState("")

    useEffect(() => {
        setUserName(props.username)
    })


    return(
    <>
    

    
    </>
    )


}

export {Navbar}