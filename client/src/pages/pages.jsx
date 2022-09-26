import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './home';
import Searched from './searched';



const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searched/:country" element={<Searched />} />
        </Routes>
    )
}

export default Pages;