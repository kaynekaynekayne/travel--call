import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
    const {signup}=useAuthContext();
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await signup(email, password);
            navigate("/login");
        }catch(err){
            toast.error(err.message);
        }
    }

    return (
        <div className='container h-100'>
            <div className='row align-items-center h-100'>
                <form onSubmit={handleSubmit} className='col mx-auto'>
                    <div className="col-lg-10 mb-3 ">
                        <label htmlFor="staticEmail2" className="visually-hidden">이메일</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="staticEmail2" 
                            placeholder="Email"
                            onChange={(e)=>setEmail(e.target.value)}    
                        />
                    </div>
                    <div className="col-lg-10 mb-3">
                        <label htmlFor="inputPassword2" className="visually-hidden">비밀번호</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword2" 
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}    
                        />
                    </div>
                    <div className="col-lg-10 mb-3 justify-content-center">
                        <button type="submit" className="btn btn-primary mb-3">회원가입</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup;