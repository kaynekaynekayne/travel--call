import instance from "../index";
import axios from 'axios';

export const addPost=async({email, contactInfo}={})=>{
    console.log("im in addpost in apis folder client")
    try{
        const userInfo={email, contactInfo}
        console.log(userInfo);
        const response=await instance.post("/api/post/add",
            userInfo,
            {
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json",
                }
            }
        );
        return response;
    }catch(err){
        throw new Error(err)
    }
}