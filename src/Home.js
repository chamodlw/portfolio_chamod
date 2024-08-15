import React from 'react';
import './css/Home.css';
import profpic from './images/chamod1.png';
import Mysides from './components/mysides.js';

const Home = () => {
return (
    <div className="Home">
        <div className="Home-container">
            <div className="Home-left">
                <div className="Home-header">
                    <p style={{ fontSize: '50px' ,fontWeight: 'bold'}}>Hi There!</p>
                    <p style={{ fontSize: '25px', fontWeight: '600' }}>Welcome to my website. I'm <strong className='myname'>Chamod Weerasinghe</strong>.</p>
                </div>
                <Mysides/>
            </div>
            <div className="Home-right">
                <div className="Home-profile-pic">
                    <img
                        src={profpic}
                        alt="Profile Pic"
                        style={{ width: '300px', height: '300px', borderRadius: '50%' }}
                    />
                </div>
            </div>
        </div>
    </div>
);
};

export default Home;