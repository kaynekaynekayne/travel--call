import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact.js'

const Searched = () => {

    const params=useParams();
    const {country}=params;

    useEffect(()=>{
        getLocalContact(country)
        .then(items=>console.log(items));
    },[params]);

    return (
        <div>searched</div>
    )
}

export default Searched;