import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config"
import {doc, getDoc, setDoc} from "firebase/firestore";




export async function getUserViewableTeam() {

    const auth = getAuth(app);
    const db = getFirestore(app);
    const user = auth.currentUser;

    const userDocRef = doc(db, "users", user.uid); // get Reference to the users collection
    const docSnap = await getDoc(userDocRef);
    return docSnap.data().viewTeam;

}


export async function getTeamData(name){
    const auth = getAuth(app);
    const db = getFirestore(app);
    const user = auth.currentUser;

    const userDocRef = doc(db, "teams", name); // get Reference to the users collection
    const docSnap = await getDoc(userDocRef);
    console.log("view team from fetch:" + docSnap.data().viewTeam);

    return docSnap.data().viewTeam;

}



