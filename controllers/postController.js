import Post from "../models/Post.js";

export const addPosts=async(req,res)=>{
    try{
        const {email, contactInfo}=req.body;
        //1. 이메일이 있는지
        //1-1.이메일이 있으면 
        const post=await Post.create({
            email,
            addedPosts:contactInfo,
        })
        return res.status(200).json(post);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}