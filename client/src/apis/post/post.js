import instance from "../index";
import axios from 'axios';

export const addPost=async({email, contactInfo}={})=>{
    console.log("im in addpost in apis folder client")
    try{
        const userInfo={email, contactInfo}
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