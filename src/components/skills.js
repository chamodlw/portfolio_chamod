import React from 'react';
import '../css/skills.css';
import img1 from '../images/SW_project_L2.jpg';
import img2 from '../images/bmi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <div>
            <div className="skills">
                <div className='technical'>
                    <h1 className="technical-header">Technical Skills</h1>
                    <div className='tag-section'>
                        <div className='horizontal-list'>
                            <div>Web development</div>
                            <div>Programming</div>
                            <div>Mobile App Development</div>
                            <div>Designing</div>
                        </div>
                    </div>
                    <div className='web'>
                        <h1 className="co-headers">Web development</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'>Html, Css, Java Script</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'>MERN Tech Stack</h2>
                            <div className="card">
                                <div className="card-header">
                                    <img src={img1} alt="Card" className="card-image" />
                                </div>
                                <div className="card-text">
                                    <h4>Medical Lab Management System | Second Year Software Project </h4>
                                    <p><a href="https://github.com/chamodlw/SW_No.14_Frontend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub Repository</a></p>
                                    <p><a href="https://youtu.be/RtacSBP3y1Q?si=jxBOoaLwE_CWasXo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> Demo Video</a></p>
                                    <p><a href="https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_lims-medical-lab-information-management-activity-7235291488153133056-zaQx?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn Post</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='web'>
                        <h1 className="co-headers">Programming</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'>Java , Python ,C</h2>
                        </div>
                    </div>
                    <div className='mobile'>
                        <h1 className="co-headers">Mobile App Development</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'>React-Native</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'>Flutter</h2>
                            <div className="card">
                                <div className="card-header">
                                    <img src={img2} alt="Card" className="card-image" />
                                </div>
                                <div className="card-text">
                                    <h4> BMI Calculator | Flutter Project | Mobile Application</h4>
                                    <p><a href="https://github.com/chamodlw/BMI" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub Repository</a></p>
                                    <p><a href="https://youtu.be/YoBMERlW-gg?si=1H1KITXVKMxlZbUR" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> Demo Video</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='web'>
                        <h1 className="co-headers">Designing</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'>Figma</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'>Adobe Photoshop</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'>CANVA</h2>
                        </div>
                    </div>
                </div>
                {/*seperate*/}
                <div className='soft'>
                    <h1 className="soft-header">Soft Skills</h1>
                    <div className='tag-section'>
                        <div className='horizontal-list'>
                            <div>Leadership</div>
                            <div>Teamwork</div>
                            <div>Creativity</div>
                            <div>Problem Solving</div>
                            <div>Adaptability</div>
                        </div>
                    </div>
                    <div className='soft-category'>
                        <h1 className="soft-cat-headers">Leadership</h1>
                    </div>
                    <div className='soft-category'>
                        <h1 className="soft-cat-headers">Teamwork</h1>
                    </div>
                    <div className='soft-category'>
                        <h1 className="soft-cat-headers">Creativity</h1>
                    </div>
                    <div className='soft-category'>
                        <h1 className="soft-cat-headers">Adaptability</h1>
                    </div>
                    <div className='soft-category'>
                        <h1 className="soft-cat-headers">Problem Solving</h1>
                    </div>
                    <div className='soft-category'>
                        <h1 className="soft-cat-headers">Work Ethic</h1>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Skills;