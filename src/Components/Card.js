import { SupervisorAccountOutlined } from '@mui/icons-material';
import React from 'react';

const Card = ({ backgroundColor, firstPara, secondPara }) => {
    return (
        <div className='card'>
            <div className='card-left'>
                <SupervisorAccountOutlined
                    sx={{
                        padding: '5px',
                        fontSize: '50px',
                        color: 'white',
                        backgroundColor: { backgroundColor },
                        borderRadius: '50%',
                    }}
                />
            </div>
            <div className='card-right'>
                <p>{firstPara}</p>
                <p>{secondPara}</p>
            </div>
        </div>
    );
};

export default Card;
