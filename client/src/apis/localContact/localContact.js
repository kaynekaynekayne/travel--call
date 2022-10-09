import instance from "../index";

export const getLocalContact=async(country)=>{
    const response=await instance.get("/api/contact",{
        params:{country}
    });
    return response.data;

}