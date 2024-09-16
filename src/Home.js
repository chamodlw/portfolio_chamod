import React from 'react';
import './css/Home.css';
import profpic from './images/chamod1.png';
import Mysides from './components/mysides.js';
import ThreeScene from './components/ThreeScene.js';
import cv from './pdf/resume.pdf';

const Home = () => {
const handleClick = () => {
    window.open(cv, '_blank');
};

return (
    <div className="Home">
        <div className="Home-container">
            <div className="Home-left">
                <div className="Home-header">
                    <p style={{ fontSize: '50px' ,fontWeight: 'bold', marginTop:'12%'}}>Hi There!</p>
                    <p style={{ fontSize: '25px', fontWeight: '600' }}>Welcome to my website. I'm <strong className='myname'>Chamod Weerasinghe</strong>.</p>
                </div>
                <Mysides/>
                <div className='resume'>
                    <button className="b1" onClick={handleClick}>Resume</button>
                </div>
            </div>
            <div className="Home-right">
                <div className="Home-profile-pic-border">
                    <div className="Home-profile-pic">
                        <ThreeScene />
                        <img
                            src={profpic}
                            alt="Profile Pic"
                            style={{ width: '300px', height: '300px', borderRadius: '50%', border: '13px groove #0F8CEC'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Home;