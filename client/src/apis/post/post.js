import instance from "../index";
import axios from 'axios';

export const getAllLists=async(uid)=>{
    try{
        const response=await instance.get(`/api/post/list/${uid}`);
        return response;
    }catch(err){
        throw new Error(err)
    }
};

export const addPost=async({email, contactInfo, uid,}={})=>{
    console.log("im in addpost in apis folder client")
    try{
        const userInfo={email, contactInfo, uid}
        const response=await instance.post("/api/post/add",
            userInfo,
            {
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json",
                }
            }
        );
        console.log(response);
        return response;
    }catch(err){
        throw new Error(err)
    }
}