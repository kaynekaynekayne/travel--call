import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <nav>
            <NavStyle>
                <li><Link to="/">home</Link></li>
                <li><Link to="/user">profile</Link></li>
            </NavStyle>
        </nav>
    )
};

const NavStyle=styled.ul`
    display:flex;
    justify-content:space-between;
    padding:1rem;
`;

export default Header