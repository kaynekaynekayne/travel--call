import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { getLocalContact } from '../apis/localContact/localContact.js';
import { useAuthContext } from '../hooks/useAuthContext.js';
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

    const handleClick=async()=>{
        try{
            if(user && contactInfo){
                const resp=await addPost({email:user.email, contactInfo});
                console.log(resp);
                if(resp.statusText==="OK"){
                    toast.success(resp.data.msg);
                }else{
                    toast.warning(resp.response.data.error);
                }
            } else{
                toast.warning("회원만 이용할 수 있습니다")
            }
        }catch(err){
            console.log(err);
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
                        <img 
                            className='flag'
                            src={contactInfo.flag_download_url} alt="flag"/><br/>
                        <Button 
                            onClick={handleClick} 
                            variant="outlined" 
                            startIcon={<AddBox />}
                        >저장</Button>
                        <Content>
                            {ConvertStringToHTML(contactInfo.contact_remark)}
                        </Content>
                        {contactInfo.dang_map_download_url && 
                            <div>
                                <h5>현지위험지도</h5>
                                <img
                                    className="poster" 
                                    src={contactInfo.dang_map_download_url} alt="dangerous map"></img>
                            </div>
                        }
                    </MainStyle>
                )
            }
            <ToastContainer />
        </div>
    )
}

const MainStyle=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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

    .flag{
        width:300px;
        box-shadow: 3px 5px 18px -6px rgba(0,0,0,0.3);
    }
    .poster{
        max-width:75%;
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