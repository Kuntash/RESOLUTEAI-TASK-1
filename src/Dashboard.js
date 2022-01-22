import React, { useEffect } from 'react';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles/dashboard.css';
import Navbar from './Components/Navbar';
const Dashboard = () => {
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        //If not logged in then, redirect to the login page.
        if (!user) navigate('/');
    });

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className='dashboard'>
            <Navbar />
            <button onClick={handleSignOut}> sign out</button>
        </div>
    );
};

export default Dashboard;
