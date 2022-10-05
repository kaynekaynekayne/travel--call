import Post from "../models/Post.js";

export const addPosts=async(req,res)=>{
    try{
        const {email, contactInfo, uid}=req.body;

        const user=await Post.findOne({email});

        if(user){
            const {addedPosts}=user;
            const alreadySavedPosts=addedPosts.find(({country_nm})=>(country_nm===contactInfo.country_nm));
            if(!alreadySavedPosts){
                await Post.findByIdAndUpdate(
                    user._id,
                    {
                        addedPosts:[...user.addedPosts, contactInfo],
                    },
                    {new:true}
                )
            } else return res.status(400).json({error:"이미 목록에 저장되어 있습니다"})

        } else await Post.create({email, addedPosts:[contactInfo], uid});

        return res.status(200).json({message:"목록에 추가되었습니다"})
        
    }catch(err){
        return res.status(400).json(err);
    }
};

export const getPosts=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await Post.findOne({id}) //안됨 다름
        return res.status(200).json({msg:"hihi"})
    }catch(err){
        console.log(err);
    }
};
