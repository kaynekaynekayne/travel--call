import React from 'react'
import {Link} from 'react-router-dom';
import Search from './search';
import styled from 'styled-components';
import {Dialpad, AccountCircle} from '@mui/icons-material';


const Header = () => {
    return (
        <nav >
            <NavStyle>
                <li><Link to="/"><Dialpad color="primary"/></Link></li>
                <li><Search /></li>
                <li><Link to="/user"><AccountCircle color="disabled" fontSize="large"/></Link></li>
            </NavStyle>
        </nav>
    )
};

const NavStyle=styled.ul`
    display:flex;
    border-bottom:1px solid #d9d5d4;
    justify-content:space-between;
    padding:1rem;
    align-items:center;
`;

export default Header