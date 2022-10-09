import React,{useState} from 'react'
import { deleteList } from '../apis/post/post';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';
import {
    Typography,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConvertStringToHTML } from '../utils/converStringToHTML';

const EachCard = ({post}) => {
    
    const {
        country_nm,
        contact_remark,
        continent_nm,
    }=post; 

    const {dispatch}=usePostContext();
    const {user}=useAuthContext();

    console.log(post);
    console.log(user);

    const handleDelete=async()=>{
        try{
            const response=await deleteList({email:user.email, post});
            console.log(response);
            
            if(!response.error){
                dispatch({type:"DELETE_POST", payload:response.data.deletedPost})
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div style={{display:'flex', justifyContent:'space-between'}} >
            <Accordion sx={{width:'100%'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{country_nm}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    {ConvertStringToHTML(contact_remark)}
                </AccordionDetails>
            </Accordion>
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default EachCard;