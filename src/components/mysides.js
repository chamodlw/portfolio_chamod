import React from 'react';
import Typewriter from 'typewriter-effect';
import '../css/mysides.css';

const Mysides = () => {
return (
    <div className="Mysides">
        <Typewriter
          options={{
            strings: ['Full Stack Web Developer', 'Graphic Designer'],
            autoStart: true,
            loop: true,
            deleteSpeed: 100, // Set delete speed to Infinity to prevent deleting
          }}
        />
    </div>
);
};

export default Mysides;