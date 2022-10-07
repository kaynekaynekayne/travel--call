import React,{useEffect} from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { getAllLists } from '../apis/post/post';
import { usePostContext } from '../hooks/usePostContext';
import Card from '../components/card';


const UserList = () => {

    const {user}=useAuthContext();
    const {uid}=user;

    const {posts, dispatch}=usePostContext();
    console.log(posts);
    //dispatch로 인해서 posts가 바뀔 것이고 
    //그 posts를 map으로 화면에 뿌릴 것임

    useEffect(()=>{
        const fetchLists=async()=>{
            const response=await getAllLists(uid);
            if(!response.error){
                console.log("성공적으로 받아옴");
                console.log(response.data);
                //dispatch 자리
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
                <Card key={post.country_iso_alp2} post={post}/>
            )}
        </div>
    )
}

export default UserList;