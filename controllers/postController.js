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

export const removePost=async(req,res)=>{
    try{
        const {email, post}=req.body;
        const user=await Post.findOne({email});

        if(user){
            const {addedPosts}=user;
            const postIndex=addedPosts.findIndex(({country_nm})=>(country_nm===post.country_nm));
            // if(!postIndex) res.status(400).json({error:"포스트를 찾을 수 없습니다"})
            // const deletedPost=addedPosts[postIndex];
            if(addedPosts.length===1){
                await Post.findByIdAndUpdate(
                    user._id,
                    {
                        addedPosts:[],
                    },
                    {new:true}
                )
                return res.status(200).json({msg:"성공적으로 제거되었습니다", posts:addedPosts}); 
                // await Post.findOneAndDelete({email})
                // return res.status(200).json({msg:"성공적으로 제거되었습니다"}); 
            } else{
                addedPosts.splice(postIndex,1);
                await Post.findByIdAndUpdate(
                    user._id,
                    {
                        addedPosts,
                    },
                    {new:true}
                )
                return res.status(200).json({msg:"성공적으로 제거되었습니다", posts:addedPosts}); 
            }

        }
    }catch(err){
        return res.status(400).json({error:err});
    }
};
