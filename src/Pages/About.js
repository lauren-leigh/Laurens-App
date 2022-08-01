import React from 'react';
import headshot from '../images/IMG_0629.JPG';
import './About.css';

function About() {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <img src={headshot} alt='headshot' />
            <div className='column'>
                <h2>About</h2>
                <span className='info'></span>
                <p>PLACEHOLD RLACEHOLD ERLACEH OLDER ACEHOLD ERLA CEHOLDERLA CEHOLDERLACEHOLDERLACEHOLDERLACEHOLDER</p>
                <p>PLACEHOLDER</p>
            </div>
        </div>
    </div>
  )
}

export default About