import instance from ".";

export const getContact=()=>{
    const response=await instance.get("/",{
        params:{
            serviceKey:process.env.OPEN_API_KEY,
            returnType:JSON,
            numOfRows:10,
            pageNo:1,
            // [process.env.COUNTRY_NAME]:'일본',
        }
    })
    return response;
};