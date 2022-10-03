import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Public} from '@mui/icons-material';
import {OutlinedInput, InputAdornment} from '@mui/material';

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
            {/* <InputStyle 
                type="text"
                value={country}
                placeholder="나라를 입력하세요"
                onChange={(e)=>setCountry(e.target.value)}
            /> */}
            <OutlinedInput
                required
                placeholder="나라를 검색하세요"
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
                size="small"
                sx={{width:'50vw'}}
                endAdornment={
                    <InputAdornment position="start">
                        <Public />
                    </InputAdornment>
                }
            />
        </form>
    )
};

export default Search