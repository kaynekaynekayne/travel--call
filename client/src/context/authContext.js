import { createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import {auth} from '../service/firebase';



const authContext=createContext();

export const AuthContextProvider=({children})=>{

    const [user,setUser]=useState({});

    return(
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    )
}