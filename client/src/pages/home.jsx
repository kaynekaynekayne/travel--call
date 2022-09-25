import React,{useState, useEffect} from 'react'
import { getLocalContact } from '../apis/localContact.js'

const Home = () => {

    const [info, setInfo]=useState();

    useEffect(()=>{
        getLocalContact()
        .then(items=>console.log(items));
    },[]);

    return (
        <div>home</div>
    )
}

export default Home