import React from 'react'
import { deleteList } from '../apis/post/post';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';

const Card = ({post}) => {

    const {dispatch}=usePostContext();
    const {user}=useAuthContext();

    console.log(post);
    console.log(user);

    const handleDelete=async()=>{
        try{
            const response=await deleteList({email:user.email, post});
            console.log(response);
            
            if(!response.error){
                // dispatch({type:"DELETE_POST", payload:response.data.deletedPost})
                dispatch({type:'GET_POSTS', payload:response.data.posts})

            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <h3>{post.country_nm}</h3>
            <div onClick={handleDelete}>x</div>
        </div>
    )
}

export default Card;