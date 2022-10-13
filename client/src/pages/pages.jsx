import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Searched from './searched';
import Signup from './signup';
import UserList from './userList';
import { useAuthContext } from '../hooks/useAuthContext';

const Pages = () => {

    const {user}=useAuthContext();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/user" element={user ? <UserList /> : <Navigate to="/login"/>}/>
            <Route path="/searched/:country" element={<Searched />} />
        </Routes>
    )
};


export default Pages;