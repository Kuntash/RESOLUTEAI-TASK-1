import React from 'react';
import { Box } from '@mui/material';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles/dashboard.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
const Dashboard = () => {
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
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

    // Date Component
    const date = new Date();
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);
    return (
        <div className='dashboard'>
            {/* Navbar */}
            <Navbar />

            {/* Table */}
            <main className='dashboard-main'>
                <header className='dashboard-header'>
                    <h2>Dashboard</h2>
                    <p>{dateFormat}</p>
                </header>

                <div className='card-container'>
                    <Card
                        backgroundColor='#1DD67D'
                        firstPara='Total Tickets Today'
                        secondPara={15}
                    />
                    <Card
                        backgroundColor='#F62405'
                        firstPara='Pending Follow-Up'
                        secondPara={2}
                    />
                    <Card
                        backgroundColor='#FB9905'
                        firstPara='Total Tickets Closed'
                        secondPara={31}
                    />
                </div>
                <table>
                    
                </table>
            </main>

            <button onClick={handleSignOut}> sign out</button>
        </div>
    );
};

export default Dashboard;
