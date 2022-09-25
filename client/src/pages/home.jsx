import React,{useEffect} from 'react'
import { getLocalContact } from '../apis/localContact'

const Home = () => {
    useEffect(()=>{
        getLocalContact()
        .then(console.log);
    },[]);

    return (
        <div>homeeeeeeeeeeee</div>
    )
}

export default Home