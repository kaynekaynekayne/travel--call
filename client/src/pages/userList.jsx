import React,{useEffect, useState} from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { getAllLists } from '../apis/post/post';
import { usePostContext } from '../hooks/usePostContext';
import EachCard from '../components/card';
import Loading from '../components/loading';
import {ToastContainer, toast} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const UserList = () => {

    const {user}=useAuthContext();
    const {uid}=user;
    const {posts, dispatch}=usePostContext();

    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchLists=async()=>{
            try{                
                setLoading(true);
                const resp=await getAllLists(uid);
                console.log(resp);
                if(resp.statusText==="OK"){
                    await dispatch({type:'GET_POSTS', payload:resp.data.posts})
                } else{
                    toast.warning(resp.response.data.msg);
                }
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }

        if(user && uid){
            fetchLists();
        }

    },[user, dispatch, uid]);

    return (
        <div>
            {loading ? <Loading /> : 
                !posts || posts.length==0 ? <p>목록이 없습니다</p>
                : posts.map(post=>
                    <EachCard key={post.country_iso_alp2} post={post}/>
                )
            }
            <ToastContainer />
        </div>
    )
}

export default UserList;