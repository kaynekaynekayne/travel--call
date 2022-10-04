import Post from "../models/Post.js";

export const addPosts=async(req,res)=>{
    const {email, contactInfo}=req.body;
    try{
        const post=await Post.create({
            email,
            addedPosts:contactInfo,
        })
        console.log(post);
        return res.status(200).json(post);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}