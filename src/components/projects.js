import React from 'react';
import '../css/projects.css';
import Footer from './footer';
import Navprojects from './navbar-projects';
import Web1 from './projects/web1';
import Web2 from './projects/web2';
import Web3 from './projects/web3';

const Projects = () => {
    return (
        <div>
            <div className="projects">
                <div className="projects-header">
                    <h1>PROJECTS</h1>
                </div>
                <div className='nav-projects'>
                    <Navprojects />
                </div>
                <div className="projects-body">
                    <div className='web'>
                        <div className='web-header'>
                            <h1>Web Applications</h1>
                        </div>
                        <div className='web-body'>
                            <div className='web-com'>
                                <Web1/>
                            </div>
                            <div className='web-com'>
                                <Web2/>
                            </div>
                            <div className='web-com'>
                                <Web3/>
                            </div>
                        </div>
                    </div>
                    <div className='mobile'>
                        <div className='mobile-header'>
                            <h1>Mobile Applications</h1>
                        </div>
                        <div className='mobile-body'>
                            <div className='mobile-com'>
                                <Web1/>
                            </div>
                            <div className='mobile-com'>
                                <Web2/>
                            </div>
                            <div className='mobile-com'>
                                <Web3/>
                            </div>
                        </div>
                    </div>
                    <div className='AI'>
                        <div className='AI-header'>
                            <h1>AI Applications</h1>
                        </div>
                        <div className='AI-body'>
                            <div className='AI-com'>
                                <Web1/>
                            </div>
                            <div className='AI-com'>
                                <Web2/>
                            </div>
                            <div className='AI-com'>
                                <Web3/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;