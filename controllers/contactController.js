import { getContact } from "../apis/contact.js"

export const getContacts=(req,res)=>{
    getContact()
    .then(response=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
        // res.status(200).json(response);
    })
    .catch(err=>res.status(400).json({message:err.message}))
}