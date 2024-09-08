import React from 'react';
import '../css/education.css';
import img1 from '../images/ccbc.jpg';
import img2 from '../images/rcg.jpg';
import img3 from '../images/uom.jpg';
import Footer from './footer';

const Education = () => {
return (
    <div className="education">
        <div className="education-header">
            <h1>Education</h1>
        </div>
        <div className='education-body'> 
            <div className='uni'>
                <div className='sub-header'>
                    <h2>Higher Education</h2>
                    <div className='sub-body'>
                        <div className="carde">
                            <div className="carde-header">
                                <img src={img3} alt="Card" className="carde-image" />
                            </div>
                            <div className="carde-text">
                                <h4>University of Moratuwa | Sri Lanka</h4>
                                <p>BSc.(Hons) in Information Technology (2022 - 2026)</p>
                                <p>CGPA: 3.45</p>
                                <p>
                                    I have actively participated in various clubs and societies, contributing to batch work, and supporting academic activities through collaboration and teamwork.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='al'>
                <div className='sub-header'>
                    <h2>Advanced Level</h2>
                    <div className='sub-body'>
                        <div className="carde">
                            <div className="carde-header">
                                <img src={img2} alt="Card" className="carde-image" />
                            </div>
                            <div className="carde-text">
                                <h4>Richmond College | Galle</h4>
                                <p>Advanced Level (2017 - 2020)</p>
                                <p>Results: AAB (Physical Science Scheme)</p>
                                <p>Z-score: 1.7434</p>
                                <p>
                                    I actively participated in extracurricular activities and excelled in academics, maintaining a decent character throughout my school years.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ol'>
                <div className='sub-header'>
                    <h2>Primary to Ordinary Level</h2>
                </div>
                <div className='sub-body'>
                    <div className="carde">
                        <div className="carde-header">
                            <img src={img1} alt="Card" className="carde-image" />
                        </div>
                        <div className="carde-text">
                            <h4>Christ Church Boys' College | Baddegama, Galle</h4>
                            <p>Years of Study: 2006 - 2017</p>
                            <p>O/L Results: 9 Distinctions</p>
                            <p>
                                I passed the scholarship examination and served as a senior prefect on the school prefect board. I was involved in extracurricular and academic activities, maintaining a good character throughout my school journey.
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <Footer />
    </div>
);
};

export default Education;