import React from 'react'
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
    }=post; 

    const {dispatch}=usePostContext();
    const {user}=useAuthContext();

    const handleDelete=async()=>{
        try{
            const response=await deleteList({email:user.email, post});
            const data=response.data.posts[0];            
            dispatch({type:"DELETE_POST", payload:data})
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