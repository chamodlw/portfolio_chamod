import React from 'react';
import '../css/projects.css';
import Footer from './footer';
import Navprojects from './navbar-projects';
import Card from './card-projects';

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
                        <Card/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;