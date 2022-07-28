import React from "react";
import './Namesake.css';
import { BsLinkedin, BsGithub } from "react-icons/bs"

function Name() {
    return (
        <div className="main-container">
            <div className="name-holder">
                <h1>Lauren Hanna</h1>
                <h3>Finance Analyst turned Full Stack Developer </h3>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/lauren-hanna-72873a158/" className="linkedIn"><BsLinkedin /></a>
                    <a href="https://github.com/lauren-leigh" className="github"><BsGithub /></a>
                </div>
            </div>
            {/* <div className="quote-holder">
                <QuoteFetch />
            </div> */}
        </div>
    )
}

export default Name