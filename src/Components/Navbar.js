import React, { useEffect, useRef } from 'react';
import {
    Notifications,
    AccountCircle,
    ExpandMoreRounded,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const navigate = useNavigate();
    const signOutButton = useRef();

    //Toggle hidden class on the signout button when expandMore button is clicked
    const handleClick = () => {
        console.log('hello');
        signOutButton.current.classList.toggle('hidden');
    };

    //Signout when signout button is clicked and redirect to '/'
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => console.log(error));
    };
    return (
        <nav className='nav'>
            <div className='nav-left'>
                <img
                    className='nav-logo'
                    src='images/logo.png'
                    alt='Company Logo'
                />
            </div>
            <div className='nav-right'>
                <Notifications
                    sx={{
                        ':hover': {
                            color: '#000',
                        },
                        cursor: 'pointer',
                        color: '#777',
                        fontSize: '30px',
                    }}
                />
                <AccountCircle
                    sx={{
                        ':hover': {
                            color: '#000',
                        },
                        cursor: 'pointer',
                        color: '#777',
                        fontSize: '40px',
                    }}
                />
                <IconButton onClick={handleClick}>
                    <ExpandMoreRounded
                        sx={{
                            color: '#fa2611',
                            fontSize: '30px',
                            cursor: 'pointer',
                        }}
                    />
                </IconButton>
                <button
                    ref={signOutButton}
                    className='signout hidden'
                    onClick={handleSignOut}
                >
                    sign out
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
