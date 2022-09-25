import { getContact } from "../apis/contact.js"

export const contactController=async(req,res)=>{
    getContact()
    .then(response=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
    })
    .catch(err=>res.status(400).json({message:err.message}))
}