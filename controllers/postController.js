import Post from "../models/Post.js";

export const addPosts=async(req,res)=>{
    try{
        const {email, contactInfo, uid}=req.body;

        const user=await Post.findOne({email});

        if(user){
            const {addedPosts}=user;
            const alreadySavedPosts=addedPosts.find(({country_nm})=>(country_nm===contactInfo.country_nm));
            if(!alreadySavedPosts){
                const post=await Post.findByIdAndUpdate(
                    user._id,
                    {
                        addedPosts:[...user.addedPosts, contactInfo],
                    },
                    {new:true}
                )
                return res.status(200).json({msg:"목록에 추가되었습니다", post})
            } else return res.status(400).json({error:"이미 목록에 저장되어 있습니다"})

        } else {
            const post=await Post.create({email, addedPosts:[contactInfo], uid});
            return res.status(200).json({msg:"목록에 추가되었습니다",post})
        }
        
        
    }catch(err){
        return res.status(400).json(err);
    }
};

export const getPosts=async(req,res)=>{
    try{
        const {uid}=req.params;
        const user=await Post.findOne({uid});
        if(user){
            return res.status(200).json({msg:"성공", posts:user.addedPosts})
        } else return res.status(400).json({error:"일치하는 유저를 찾을 수 없습니다"})
    }catch(err){
        return res.status(400).json(err);
    }
};
