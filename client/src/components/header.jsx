import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <nav>
            <NavStyle>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/user">픞</Link></li>
            </NavStyle>
        </nav>
    )
};

const NavStyle=styled.ul`
    display:flex;
    justify-content:space-between;
    padding:0.5rem;
`;

export default Header