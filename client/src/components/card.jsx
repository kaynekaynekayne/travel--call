import React from 'react'
import { deleteList } from '../apis/post/post';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';
import { ConvertStringToHTML } from '../utils/converStringToHTML';

const EachCard = ({post, index}) => {
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
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <div class="mb-0 d-flex justify-content-between">
                        <button class="btn" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`#collapse${index}`}>
                            {country_nm}
                        </button>
                        <button class="btn" onClick={handleDelete}>
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>

                <div id={`collapse${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        {ConvertStringToHTML(contact_remark)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachCard;