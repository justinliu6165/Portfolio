import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header id="header-wrapper">
            <div className="title-wrapper">
                <div className="header-title">Justin Liu</div>
                <div className="job-title">Fullstack Web Developer</div>
            </div>

            <div className="tech-stack">
                <ul className="tech-wrapper">
                    <li className="tech">HTML5</li>
                    <li className="tech">CSS3</li>
                    <li className="tech">Javascript</li>
                    <li className="tech">React</li>
                    <li className="tech">NodeJS</li>
                    <li className="tech">Express</li>
                    <li className="tech">MongoDB</li>
                </ul>
            </div>
        </header>
    )
}