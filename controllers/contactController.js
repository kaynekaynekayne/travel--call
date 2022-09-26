import { getContact } from "../apis/contact.js"

export const getContacts=(req,res)=>{
    const {country}=req.query;

    getContact(country)
    .then(response=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
    })
    .catch(err=>res.status(400).json({message:err.message}))
}