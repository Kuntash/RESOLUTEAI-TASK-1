import React from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles/dashboard.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import TableComponent from './Components/TableComponent';
const Dashboard = () => {
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        //If not logged in then, redirect to the login page.
        if (!user) navigate('/');
    });



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
                <TableComponent />
            </main>

  
        </div>
    );
};

export default Dashboard;
