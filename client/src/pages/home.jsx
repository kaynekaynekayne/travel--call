import React,{useState, useEffect} from 'react'
import { getLocalContact } from '../apis/localContact.js'

const Home = () => {

    const [info, setInfo]=useState();

    useEffect(()=>{
        getLocalContact()
        .then(items=>setInfo(items));
    },[]);

    return (
        <div>{info}</div>
    )
}

export default Home