import React from 'react'
import './Work.css';
import TimelineFunc from './timeline';

function Work() {
  return (
    <div className="work-container" id='work'>
        <div className="head-container">
            <h2>Work Experience</h2>
        </div>
        <div className="body-container">
            <TimelineFunc />

        </div>
    </div>
  )
}

export default Work