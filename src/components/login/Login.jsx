import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import './Login.css';
import axios from 'axios';

const Login = () => {

    const [userDetail, setUserDetail] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const changeHandler = (e) => {
        setUserDetail((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }

    const loginHandler = async (isUser) => {
        try {
            const loginData = await axios.post(
                "/api/auth/login",
                isUser ? {
                    email: "adarshbalika@gmail.com",
                    password: "adarshBalika123"
                } : userDetail
            );

            console.log(loginData);

            localStorage.setItem('token', loginData.data.encodedToken)

            setUser({
                user: loginData.data.foundUser,
                token: loginData.data.encodedToken
            });
            navigate("/");
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
       <div>
         <div className='login-container'>
           <div className='login-box'>
             <div className='login-title'>Login</div>
             <div className='input-container'>
               <div className='input-title'>Email:</div>
               <input
                 name="email"
                 value={userDetail.email}
                 onChange={(e) => changeHandler(e)} 
                 type='email'
                 placeholder='Enter email'
                 className='input-field'
               />
             </div>
             <div className='input-container'>
               <div className='input-title'>Password:</div>
               <input
                 name="password"
                 onChange={(e) => changeHandler(e)}
                 value={userDetail.password}
                 type='password'
                 placeholder='Enter password'
                 className='input-field'
               />
             </div>
             <button 
                className='input-login-btn'
                onClick={() => loginHandler(false)}
             >
                Login
             </button>
             <div 
                className='test-credential-login-link'
                onClick={() => loginHandler(true)}
             >
               Login with test credential
             </div>
             <Link to='/signup'>
               <div className='create-account-link'>Create new account</div>
             </Link>
           </div>
         </div>
       </div>
    )
}

export { Login }