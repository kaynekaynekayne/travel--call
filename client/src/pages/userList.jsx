import React,{useEffect, useState} from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { getAllLists } from '../apis/post/post';
import { usePostContext } from '../hooks/usePostContext';
import EachCard from '../components/card';
import Loading from '../components/loading';


const UserList = () => {

    const {user}=useAuthContext();
    const {uid}=user;
    const {posts, dispatch}=usePostContext();
    
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        const fetchLists=async()=>{
            setLoading(true);
            const response=await getAllLists(uid);
            if(!response.error){
                dispatch({type:'GET_POSTS', payload:response.data.posts})
            } else{
                console.log(response.error);
            }
            setLoading(false);
        }

        if(user && uid){
            fetchLists();
        }

    },[user, dispatch, uid]);

    return (
        <div>
            {loading ? <Loading /> :
                posts && posts.map(post=>
                    <EachCard key={post.country_iso_alp2} post={post}/>
                )
            }
        </div>
    )
}

export default UserList;