import express from 'express';
import axios from 'axios';


const router=express.Router();

router.get("/api", async(req,res)=>{
    const response=await axios.get("http://apis.data.go.kr/1262000/LocalContactService2/getLocalContactList2",{
        params:{
            serviceKey:process.env.OPEN_API_KEY,
            returnType:JSON,
            numOfRows:10,
            pageNo:1,
            [process.env.COUNTRY_NAME]:'일본',
        }
    })
    return response.data;
});

export default router;