import instance from ".";

export const getLocalContact=async(country)=>{
    const response=await instance.get("/api/contact",{
        params:{country}
    });
    return response.data;
};