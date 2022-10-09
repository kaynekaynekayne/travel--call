import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import {auth} from '../service/firebase';


export const authContext=createContext();

export const AuthContextProvider=({children})=>{

    const [user,setUser]=useState({});

    const signup=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const login=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout=()=>{
        return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=>unsubscribe();
    },[]);


    return(
        <authContext.Provider value={{user, signup, login, logout}}>
            {children}
        </authContext.Provider>
    )
}