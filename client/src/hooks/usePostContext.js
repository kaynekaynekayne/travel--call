import { useContext } from "react";
import { PostContext } from "../context/postContext";

export const usePostContext=()=>{
    const context=useContext(PostContext);

    if(!context){
        throw Error("post context가 존재하지 않습니다")
    }

    return context;
}