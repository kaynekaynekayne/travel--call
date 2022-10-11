import instance from "../index";

export const addPost=async({email, contactInfo, uid,}={})=>{
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
        return response;
    }catch(err){
        return err;
        // throw new Error(err.response.data)
    }
};

export const getAllLists=async(uid)=>{
    try{
        const response=await instance.get(`/api/post/list/${uid}`);
        console.log(response)
        return response;
    }catch(err){
        return err;
        // throw new Error(err)
    }
};  

export const deleteList=async({email, post}={})=>{
    try{
        const userInfo={email, post}
        const response=await instance.put('/api/post/delete',
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
        throw new Error(err.error);
    }

}