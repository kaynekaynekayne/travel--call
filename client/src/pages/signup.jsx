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
        <div className="container">
            <form onSubmit={handleSubmit} >
                <div style={{height:'80vh'}} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="form-group mb-2">
                        <label htmlFor="staticEmail2" className="visually-hidden">이메일</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="staticEmail2" 
                            placeholder="이메일"
                            required
                            onChange={(e)=>setEmail(e.target.value)}    
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="inputPassword2" className="visually-hidden">비밀번호</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword2" 
                            placeholder="비밀번호"
                            required
                            onChange={(e)=>setPassword(e.target.value)}    
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">회원가입</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup;