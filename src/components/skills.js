import React, { useState, useEffect } from 'react';
import '../css/skills.css';
import img1 from '../images/SW_project_L2.jpg';
import img2 from '../images/bmi.png';
import img3 from '../images/chat2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import DeblurTwoToneIcon from '@mui/icons-material/DeblurTwoTone';

const Skills = () => {

    const [skill, setSkill] = useState('');

    useEffect(() => {
        const section = document.getElementById(skill.toLowerCase().replace(/\s+/g, '-'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [skill]);

    return (
        <div>
            <div className="skills">
                <div className='technical'>
                    <h1 className="technical-header">Technical Skills</h1>
                    <div className='tag-section'>
                        <div className='horizontal-list'>
                            <div onClick={() => setSkill('Web development')} style={{cursor: 'pointer'}}>Web development</div>
                            <div onClick={() => setSkill('Programming')} style={{cursor: 'pointer'}}>Programming</div>
                            <div onClick={() => setSkill('Mobile App Development')} style={{cursor: 'pointer'}}>Mobile App Development</div>
                            <div onClick={() => setSkill('Designing')} style={{cursor: 'pointer'}}>Designing</div>
                        </div>
                    </div>

                    {/* Web Development Section */}
                    <div id="web-development" className='web'>
                        <h1 className="co-headers">Web development</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'><LaptopMacTwoToneIcon style={{ color: 'white', marginRight: '10px' }} />Html, Css, Java Script</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'><LaptopMacTwoToneIcon style={{ color: 'white', marginRight: '10px' }} />MERN Tech Stack</h2>
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

                    {/* Programming Section */}
                    <div id="programming" className='web'>
                        <h1 className="co-headers">Programming</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'><TerminalTwoToneIcon style={{ color: 'white', marginRight: '10px' }} />Java , Python ,C</h2>
                        </div>
                    </div>

                    {/* Mobile App Development Section */}
                    <div id="mobile-app-development" className='mobile'>
                        <h1 className="co-headers">Mobile App Development</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'><PhoneAndroidTwoToneIcon style={{ color: 'white', marginRight: '9px' }} />React-Native</h2>
                            <div className="card">
                                <div className="card-header">
                                    <img src={img3} alt="Card" className="card-image" />
                                </div>
                                <div className="card-text">
                                    <h4> AI ChatBot | React Native | Mobile Application</h4>
                                    <p><a href="https://github.com/chamodlw/ai_chatbot.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub Repository</a></p>
                                    <p><a href="https://youtube.com/shorts/aePxKzuk8uI?si=V39B5xpbUCJNeoDs" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> Demo Video</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'><PhoneAndroidTwoToneIcon style={{ color: 'white', marginRight: '9px' }} />Flutter</h2>
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

                    {/* Designing Section */}
                    <div id="designing" className='web'>
                        <h1 className="co-headers">Designing</h1>
                        <div className="card-with-head">
                            <h2 className='second-header'><DeblurTwoToneIcon style={{ color: 'white', marginRight: '10px' }} />Figma</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'><DeblurTwoToneIcon style={{ color: 'white', marginRight: '10px' }} />Adobe Photoshop</h2>
                        </div>
                        <div className="card-with-head">
                            <h2 className='second-header'><DeblurTwoToneIcon style={{ color: 'white', marginRight: '10px' }} />CANVA</h2>
                        </div>
                    </div>
                </div>

                {/* Separate Soft Skills Section */}
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
