import React,{useEffect} from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { getAllLists } from '../apis/post/post';
import { usePostContext } from '../hooks/usePostContext';
import EachCard from '../components/card';


const UserList = () => {

    const {user}=useAuthContext();
    const {uid}=user;

    const {posts, dispatch}=usePostContext();

    useEffect(()=>{
        const fetchLists=async()=>{
            const response=await getAllLists(uid);
            if(!response.error){
                dispatch({type:'GET_POSTS', payload:response.data.posts})
            } else{
                console.log(response.error);
            }
        }

        if(user && uid){
            fetchLists();
        }

    },[user, dispatch]);

    return (
        <div>
            {posts && posts.map(post=>
                <EachCard key={post.country_iso_alp2} post={post}/>
            )}
        </div>
    )
}

export default UserList;