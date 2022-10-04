import instance from "../index.js";
import axios from 'axios';

export const getLocalContact=async(country)=>{
    const response=await instance.get("api/contact",{
        params:{country}
    });
    return response.data;

}