import React from 'react';
import { Notifications } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { ExpandMoreRounded } from '@mui/icons-material';
const Navbar = () => {
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
                <ExpandMoreRounded
                    sx={{
                        color: '#fa2611',
                        fontSize: '30px',
                        cursor: 'pointer',
                    }}
                />
            </div>
        </nav>
    );
};

export default Navbar;
