import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './styles/login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed IN
                    
                //Navigate to Dashboard once the login is successful
                navigate('/dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <div className='login'>
            {/* Left Image  */}
            <div className='left-container'></div>

            {/* Right Container: LOGIN FORM */}
            <div className='right-container'>
                <div className='logo-container'>
                    <img
                        className='logo'
                        src='images/logo.png'
                        alt='company logo'
                    />
                </div>

                <h2 className='form-heading'>Enter your details to login</h2>

                {/* FORM */}
                <form onSubmit={handleLogin} action='' className='login-form'>
                    <TextField
                        sx={{ width: '400px' }}
                        id='outlined-basic'
                        label='Email Address'
                        variant='outlined'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        sx={{ width: '400px' }}
                        id='outlined-basic'
                        label='Password'
                        variant='outlined'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        sx={{
                            height: '40px',
                            backgroundColor: '#fa2611',
                            ':hover': {
                                backgroundColor: '#fa2611',
                            },
                        }}
                        onClick={handleLogin}
                        variant='contained'
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
