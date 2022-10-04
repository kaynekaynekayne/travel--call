import instance from "./index.js";

export const getContact=async(country)=>{
    let response;
    try{
        response=await instance.get("/",{
            params:{
                serviceKey:process.env.OPEN_API_KEY,
                returnType:'JSON',
                numOfRows:10,
                pageNo:1,
                [process.env.COUNTRY_NAME]:country,
            }
        })
        return response.data;
    }catch(err){
        console.log(err);
    }
};