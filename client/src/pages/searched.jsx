import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact/localContact.js';
import { useAuthContext } from '../hooks/useAuthContext.js';
import {usePostContext} from '../hooks/usePostContext'
import { addPost } from '../apis/post/post.js';
import { ConvertStringToHTML } from '../utils/converStringToHTML.js';
import Loading from '../components/loading.jsx';
import styled from 'styled-components';
import {AddBox} from '@mui/icons-material';
import {Button} from '@mui/material';
import {ToastContainer, toast} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const Searched = () => {

    const params=useParams();
    const {country}=params;

    const [contactInfo, setContactInfo]=useState("");
    const [noResult, setNoResult]=useState(false);
    const [loading, setLoading]=useState(false);

    const {user}=useAuthContext();
    const {dispatch}=usePostContext();

    const handleClick=async()=>{
        try{
            if(user && contactInfo){
                const response=await addPost({email:user.email, contactInfo, uid:user.uid});
                const posts=await response.data.post.addedPosts;
                console.log(posts[posts.length-1]);
                dispatch({type:'ADD_POST', payload:posts[posts.length-1]})
            } else{
                toast.warning("회원만 이용할 수 있습니다")
            }
        }catch(err){
            console.dir(err);
        }
    };

    useEffect(()=>{
        const getContactLists=async()=>{
            try{
                setLoading(true);
                const response=await getLocalContact(country)
                if(response.data.length===0){
                    setNoResult(true);
                    setLoading(false);
                } else{
                    setContactInfo(response.data[0]);
                    setNoResult(false);
                    setLoading(false);
                }
            }catch(err){
                console.log(err.message);
            }
        }

        if(country){
            getContactLists();
        }
    },[country]);



    return (
        <div>
            {loading ? <Loading /> : (
                noResult ? <h3>결과 없음</h3> : contactInfo && 
                    <MainStyle>
                        <h2>{contactInfo.country_nm}</h2>
                        <img src={contactInfo.flag_download_url} alt="flag"/><br/>
                        <Button onClick={handleClick} variant="outlined" startIcon={<AddBox />}>추가</Button>
                        <Content>
                            {ConvertStringToHTML(contactInfo.contact_remark)}
                        </Content>
                        <div>
                            {contactInfo.map_download_url && 
                            <>
                                <h4>지도</h4>
                                <img src={contactInfo.map_download_url} alt="map"/>
                            </>
                            }
                            {contactInfo.dang_map_download_url && 
                            <>
                                <h4>현지위험지도</h4>
                                <img src={contactInfo.dang_map_download_url} alt="dangerous map"></img>
                            </>
                            }
                        </div>
                    </MainStyle>
                )
            }
            <ToastContainer />
        </div>
    )
}

const MainStyle=styled.div`
    text-align:center;
    margin:4rem 2.5rem;

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