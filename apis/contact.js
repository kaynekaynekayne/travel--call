// import instance from "./index.js";
import axios from 'axios';

export const getContact=async()=>{
    let response;
    try{
        response=await axios.get("http://apis.data.go.kr/1262000/LocalContactService2/getLocalContactList2",{
            params:{
                serviceKey:process.env.OPEN_API_KEY,
                returnType:'JSON',
                numOfRows:10,
                pageNo:1,
                [process.env.COUNTRY_NAME]:'일본',
            }
        })
        return response;
    }catch(err){
        console.log(err);
    }
};