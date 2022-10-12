import Post from "../models/Post.js";


export const addPosts=async(req,res)=>{
    try{
        const {email, contactInfo}=req.body;

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
            const post=await Post.create({email, addedPosts:[contactInfo]});
            return res.status(200).json({msg:"목록에 추가되었습니다",post})
        }
        
        
    }catch(err){
        return res.status(400).json({error:err.message});
    }
};

export const getPosts=async(req,res)=>{
    try{
        const {email}=req.params;
        const user=await Post.findOne({email});
        if(user){
            return res.status(200).json({msg:"성공적으로 목록을 받아왔습니다", posts:user.addedPosts})
        } else{
            await Post.create({email, addedPosts:[]});
            return res.status(200).json({msg:"성공적으로 목록을 받아왔습니다"})
        }
    }catch(err){
        return res.status(400).json({err});
    }
};

export const removePost=async(req,res)=>{
    try{
        const {email, post}=req.body;
        const user=await Post.findOne({email});

        if(user){
            const {addedPosts}=user;
            const postIndex=addedPosts.findIndex(({country_nm})=>(country_nm===post.country_nm));

            const deletedPost=addedPosts.splice(postIndex,1);
            await Post.findByIdAndUpdate(
                user._id,
                {
                    addedPosts,
                },
                {new:true}
            )
            return res.status(200).json({msg:"성공적으로 제거되었습니다", posts:deletedPost}); 
        }
    }catch(err){
        return res.status(400).json({error:err});
    }
};


