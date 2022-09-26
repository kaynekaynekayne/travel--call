import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';


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
            <div>search</div>
            <input 
                type="text"
                value={country}
                placeholder="나라를 입력하세요"
                onChange={(e)=>setCountry(e.target.value)}
            />
        </form>
    )
}

export default Search