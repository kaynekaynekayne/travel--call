import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Searched from './searched';
import Signup from './signup';



const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/searched/:country" element={<Searched />} />
        </Routes>
    )
}

export default Pages;