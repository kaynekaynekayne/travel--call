import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Public} from '@mui/icons-material';
import {OutlinedInput, InputAdornment, Autocomplete, TextField} from '@mui/material';

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
            {/* <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={allCountries.map((country)=>country.label)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="나라를 검색하세요" />}
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
            /> */}
        </form>
    )
};
const allCountries = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    
];

export default Search