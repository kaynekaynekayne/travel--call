import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Search = () => {
    const [country, setCountry]=useState("");
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+country);
        setCountry("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
                class="form-control mr-sm-2" 
                type="search"
                placeholder="나라를 검색하세요"
                aria-label="Search"
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
            />
        </form>
    )
};

export default Search