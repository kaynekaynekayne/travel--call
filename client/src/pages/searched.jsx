import React,{useEffect} from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact.js'
import styled from 'styled-components';

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
        console.log(text);
        const arr=text && text.split('<h3').map(item=>'<div><h3'+item+'</div>').slice(1);
        console.log(arr);
        // return <div dangerouslySetInnerHTML={{__html:text}}></div>;
        return <div dangerouslySetInnerHTML={{__html:arr && arr.join('')}}></div>;
    };

    return (
        <div>
            {noResult ? <h4>결과 없음</h4> :
                <MainStyle>
                    <img src={keyword.flag_download_url} />
                    <h2>{keyword.country_nm}</h2>
                    {/* <button>담기</button> */}
                    <Content>
                        {ConvertStringToHTML(keyword.contact_remark)}
                    </Content>
                    <div>
                        <img src={keyword.map_download_url} />
                        <img src={keyword.dang_map_download_url}></img>
                    </div>
                </MainStyle>
            }
        </div>
    )
}

const MainStyle=styled.div`
    text-align:center;
    margin:3rem 0;

    h2{
        margin-bottom:2.5rem;
    }
    div{
        margin-top:2rem;
    }
`;

const Content=styled.section`   
    div{
        div{
            h3{
                margin-bottom:2rem;
            }
            padding:1.5rem;
            margin:2rem auto;
            background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
            box-shadow: 3px 5px 18px -6px rgba(0,0,0,0.17);
    }
`;

export default Searched;