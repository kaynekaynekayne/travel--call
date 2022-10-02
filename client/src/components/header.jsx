import React from 'react'
import {Link} from 'react-router-dom';
import Search from './search';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:'1rem'}}>
            <div className="container-fluid">
                <Search />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {false ? ( //user가 있으면
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        홈
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user">
                                        프로필
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <span 
                                        className="nav-link"
                                        style={{cursor:'pointer'}}
                                        // onClick={handleLogout}
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