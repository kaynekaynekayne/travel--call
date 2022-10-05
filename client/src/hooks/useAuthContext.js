import { useContext } from "react";
import { authContext } from "../context/authContext";

export const useAuthContext=()=>{
    const context=useContext(authContext);
    if(!context){
        throw Error('auth context가 존재하지 않습니다')
    }

    return context;
};