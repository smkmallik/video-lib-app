
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import './Signup.css';
import axios from 'axios'

const Signup = () => {

    const navigate = useNavigate();

    const [signupUser, setSignUpUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const { setUser } = useAuth();

    const signUpChangeHandler = (e) => {
        setSignUpUser((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }));
    };

    const signUpClickHandler = async() => {
        try {
            const signUpData = await axios.post('/api/auth/signup', signupUser);
            console.log(signUpData);
            setUser({
                user: signUpData.data.createdUser,
                token: signUpData.data.encodedToken
            })
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
        <div className='login-container'>
            <div className='signup-box'>
            <div className='login-title'>Create Account</div>
            <div className='input-container'>
                <div className='input-title'>First Name:</div>
                <input
                    name='firstName'
                    onChange={(e) => signUpChangeHandler(e)}
                    type='text'
                    placeholder='Enter first name'
                    className='input-field'
                />
            </div>
            <div className='input-container'>
                <div className='input-title'>Last Name:</div>
                <input
                    name='lastName'
                    onChange={(e) => signUpChangeHandler(e)}
                    type='text'
                    placeholder='Enter last name'
                    className='input-field'
                />
            </div>
            <div className='input-container'>
                <div className='input-title'>Email:</div>
                <input
                    name="email"
                    onChange={(e) => signUpChangeHandler(e)}
                    type='email'
                    placeholder='Enter email'
                    className='input-field'
                />
            </div>
            <div className='input-container'>
                <div className='input-title'>Password:</div>
                <input
                    name='passsword'
                    onChange={(e) => signUpChangeHandler(e)}
                    type='password'
                    placeholder='Enter password'
                    className='input-field'
                />
            </div>
            <button 
                className='input-login-btn'
                onClick={signUpClickHandler}
            >
                Create account
            </button>
            <Link to='/login'>
                <div className='create-account-link'>Login instead</div>
            </Link>
            </div>
        </div>
        </div>
    )
}

export { Signup };