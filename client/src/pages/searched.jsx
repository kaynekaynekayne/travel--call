import React,{useEffect} from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact.js'

const Searched = () => {

    const [keyword, setKeyword]=useState("");
    const [noResult, setNoResult]=useState(false);

    let params=useParams();
    let {country}=params;

    useEffect(()=>{
        getContactLists();
    },[country]);

    const getContactLists=async()=>{
        try{
            const response=await getLocalContact(country)
            console.log(keyword);
            console.log(response.data[0])
            if(response.data.length===0){
                setNoResult(true);
            } else{
                setKeyword(response.data[0]);
                setNoResult(false);
            }
        }catch(err){
            console.log(err.message);
        }
    }

    let ConvertStringToHTML = function(text) {
        return <div dangerouslySetInnerHTML={{__html:text}}></div>;
    };

    return (
        <div>
            {noResult ? <h4>결과 없음</h4> :
            <>
                <div>
                    <h4>{keyword.country_nm}</h4>
                    <button>담기</button>
                </div>
                <img src={keyword.flag_download_url} />
                <div>{ConvertStringToHTML(keyword.contact_remark)}</div>
                <img style={{width:'200px'}} src={keyword.map_download_url} />
                <img style={{width:'200px'}} src={keyword.dang_map_download_url}></img>
            </> 
            }
        </div>
    )
}

export default Searched;