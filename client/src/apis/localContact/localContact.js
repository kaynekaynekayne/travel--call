import instance from "../index.js";
import axios from 'axios';

export const getLocalContact=async(country)=>{
    const response=await axios.get("https://travel-call.herokuapp.com/api/contact"
    ,{
        params:{country}
    }
    );
    console.log(response)
    return response.data;
};