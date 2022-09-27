import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';


const Search = () => {
    const [country, setCountry]=useState("");
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+country);
        setCountry("");
        console.log(country);
    };

    return (
        <form onSubmit={submitHandler}>
            <InputStyle 
                type="text"
                value={country}
                placeholder="나라를 입력하세요"
                onChange={(e)=>setCountry(e.target.value)}
            />
        </form>
    )
};

const InputStyle=styled.input`
    width:100%;
    height:3rem;
    margin:2rem 0;
    padding:1rem;
    border-radius:0.2rem;
    border:1px solid black;
`;

export default Search