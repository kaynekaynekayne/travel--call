import React,{useEffect} from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { getAllLists } from '../apis/post/post';
import { usePostContext } from '../hooks/usePostContext';
import EachCard from '../components/card';
import Loading from '../components/loading';


const UserList = () => {

    const {user}=useAuthContext();
    const {uid}=user;
    const {posts, dispatch}=usePostContext();
    
    useEffect(()=>{
        const fetchLists=async()=>{
            try{
                const response=await getAllLists(uid);
                dispatch({type:'GET_POSTS', payload:response.data.posts})
            }catch(err){
                console.log(err.message);
            }
        }

        if(user && uid){
            fetchLists();
        }

    },[user, dispatch, uid]);

    return (
        <div>
            {posts ? posts.map(post=>
                    <EachCard key={post.country_iso_alp2} post={post}/>
                ) : <Loading />
            }
        </div>
    )
}

export default UserList;