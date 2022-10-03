import React,{useEffect} from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact.js'
import styled from 'styled-components';
import {AddBox, PlaylistAdd} from '@mui/icons-material';
import {Button} from '@mui/material';
import {ToastContainer, toast} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../hooks/useAuthContext.js';

const Searched = () => {

    const [keyword, setKeyword]=useState("");
    const [noResult, setNoResult]=useState(false);
    const {user}=useAuthContext();

    const params=useParams();
    const {country}=params;

    const handleClick=()=>{
        if(!user) {
            toast.warning("회원만 이용할 수 있습니다")
        }else{
            console.log("담기")
        }
    };

    useEffect(()=>{
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

        if(country){
            getContactLists();
        }
    },[country]);

    let ConvertStringToHTML = function(text) {
        const arr=text && text.split('<h3').map(item=>'<div><h3'+item+'</div>').slice(1);
        console.log(arr);
        return <div dangerouslySetInnerHTML={{__html:arr && arr.join('')}}></div>;
    };

    return (
        <div>
            {noResult ? <h3>결과 없음</h3> :
                <MainStyle>
                    <h2>{keyword.country_nm}</h2>
                    <img src={keyword.flag_download_url} alt="flag"/><br/>
                    <Button onClick={handleClick} variant="outlined" startIcon={<AddBox />}>추가</Button>
                    <Content>
                        {ConvertStringToHTML(keyword.contact_remark)}
                    </Content>
                    <div>
                        {keyword.map_download_url && 
                        <>
                            <h4>지도</h4>
                            <img src={keyword.map_download_url} alt="map"/>
                        </>
                        }
                        {keyword.dang_map_download_url && 
                        <>
                            <h4>현지위험지도</h4>
                            <img src={keyword.dang_map_download_url} alt="dangerous map"></img>
                        </>
                        }
                    </div>
                </MainStyle>
            }
            <ToastContainer />
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