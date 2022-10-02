import React,{useEffect} from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact.js'
import styled from 'styled-components';
import {AddBox} from '@mui/icons-material';
import {Button} from '@mui/material';

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
            {noResult ? <h3>결과 없음</h3> :
                <MainStyle>
                    <h2>{keyword.country_nm}</h2>
                    <img src={keyword.flag_download_url} />
                    <br/>
                    <Button variant="outlined" startIcon={<AddBox />}>추가</Button>
                    <Content>
                        {ConvertStringToHTML(keyword.contact_remark)}
                    </Content>
                    <div>
                        {keyword.map_download_url && 
                        <>
                            <h4>지도</h4>
                            <img src={keyword.map_download_url} />
                        </>
                        }
                        {keyword.dang_map_download_url && 
                        <>
                            <h4>현지위험지도</h4>
                            <img src={keyword.dang_map_download_url}></img>
                        </>
                        }
                    </div>
                </MainStyle>
            }
        </div>
    )
}

const MainStyle=styled.div`
    text-align:center;
    margin:3rem;

    h2{
        margin-bottom:1.5rem;
    }
    div{
        margin-top:2rem;
        h4{
            margin:1rem;
        }
    }
    img{
        min-width:300px;
        max-width:80%;
        box-shadow: 3px 5px 18px -6px rgba(0,0,0,0.3);
    }
`;

const Content=styled.section`   
    div{
        div{
            h3{
                margin-bottom:2rem;
            }
            padding:2rem;
            margin:3rem auto;
            background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
            box-shadow: 3px 5px 18px -6px rgba(0,0,0,0.17);
        }
    }
`;

export default Searched;