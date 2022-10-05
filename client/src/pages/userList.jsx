import React,{useEffect} from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { getAllLists } from '../apis/post/post';


const UserList = () => {

    const {user}=useAuthContext();
    const {uid}=user;

    useEffect(()=>{
        const fetchLists=async()=>{
            // const response=await getAllLists(uid);
            // if(!response.error){
            //     console.log(response);
            //     console.log("성공적으로 받아옴");
            // } else{
            //     console.log(response.error);
            // }
        }

        if(user){
            fetchLists();
        }

    },[user]);

    return (
        <div>userList</div>
    )
}

export default UserList;