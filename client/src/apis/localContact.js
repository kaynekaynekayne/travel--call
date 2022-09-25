import instance from ".";

export const getLocalContact=async()=>{
    const response=await instance.get("/api");
    return response;
};