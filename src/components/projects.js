import React, { useState, useRef, useEffect } from 'react';
import '../css/projects.css';
import Navprojects from './navbar-projects';
import Web1 from './projects/web1';
import Web2 from './projects/web2';
import Web3 from './projects/web3';
import Mobile1 from './projects/mobile1';
import Mobile2 from './projects/mobile2';
import Mobile3 from './projects/mobile3';

const Projects = () => {
    const [type, setType] = useState(0);

    // Create refs for each section
    const webSectionRef = useRef(null);
    const mobileSectionRef = useRef(null);
    const aiSectionRef = useRef(null);

    const handleChildData = (data) => {
        setType(data);
    };

    // Scroll to the relevant section when the type changes
    useEffect(() => {
        if (type === 0 && webSectionRef.current) {
            webSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (type === 1 && mobileSectionRef.current) {
            mobileSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (type === 2 && aiSectionRef.current) {
            aiSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [type]);

    return (
        <div>
            <div className="projects">
                <div className="projects-header">
                    <h1>PROJECTS</h1>
                </div>
                <div className="nav-projects">
                    <Navprojects onTypeChange={handleChildData} />
                </div>
                <div className="projects-body">
                    <div className="web" ref={webSectionRef}>
                        <div className="web-header">
                            <h1>Web Applications</h1>
                        </div>
                        <div className="web-body">
                            <div className="web-com">
                                <Web1 />
                            </div>
                            <div className="web-com">
                                <Web2 />
                            </div>
                            <div className="web-com">
                                <Web3 />
                            </div>
                        </div>
                    </div>
                    <div className="mobile" ref={mobileSectionRef}>
                        <div className="mobile-header">
                            <h1>Mobile Applications</h1>
                        </div>
                        <div className="mobile-body">
                            <div className="mobile-com">
                                <Mobile1 />
                            </div>
                            <div className="mobile-com">
                                <Mobile2 />
                            </div>
                            <div className="mobile-com">
                                <Mobile3 />
                            </div>
                        </div>
                    </div>
                    <div className="AI" ref={aiSectionRef}>
                        <div className="AI-header">
                            <h1>AI Applications</h1>
                        </div>
                        {/* 
                        <div className="AI-body">
                            <div className="AI-com">
                                <Web1 />
                            </div>
                            <div className="AI-com">
                                <Web2 />
                            </div>
                            <div className="AI-com">
                                <Web3 />
                            </div>
                        </div> 
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
