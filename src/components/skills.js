import React from 'react';
import '../css/skills.css';

const Skills = () => {
    return (
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
                </div>
                <div className='program'>
                    <h1 className="co-headers">Programming</h1>
                </div>
                <div className='mobile'>
                    <h1 className="co-headers">Mobile App Development</h1>
                </div>
                <div className='design'>
                    <h1 className="co-headers">Designing</h1>
                </div>
            </div>
            {/*seperate*/}
            <div className='soft'>
                <h1 className="soft-header">Soft Skills</h1>
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
    );
};

export default Skills;