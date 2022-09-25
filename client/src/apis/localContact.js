import instance from ".";

export const getLocalContact=async()=>{
    const response=await instance.get("/contact/api");
    return response.data;
};