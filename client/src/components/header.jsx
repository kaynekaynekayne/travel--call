import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Search from './search';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';

const Header = () => {

    const {user, logout}=useAuthContext();
    const {dispatch}=usePostContext();
    const navigate=useNavigate();

    const handleLogout=async()=>{
        await logout();
        await dispatch({type:'GET_POSTS', payload:null});
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 border-bottom" >
            <div className="container-fluid">
                <Search />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {user ? (
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        홈
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user">
                                        리스트
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <span 
                                        className="nav-link"
                                        style={{cursor:'pointer'}}
                                        onClick={handleLogout}
                                    >로그아웃</span>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        홈
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        회원가입
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        로그인
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;