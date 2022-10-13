import instance from "../index";

export const addPost=async({email, contactInfo}={})=>{
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
        return response;
    }catch(err){
        return err;
    }
};

export const getAllLists=async(email)=>{
    try{
        const response=await instance.get(`/api/post/list/${email}`);
        return response;
    }catch(err){
        return err;
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
        return err;
    }

}