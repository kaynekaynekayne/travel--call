import instance from ".";

export const getLocalContact=async(country)=>{
    const response=await instance.get("/contact/api",{
        params:{country}
    });
    return response.data;
};