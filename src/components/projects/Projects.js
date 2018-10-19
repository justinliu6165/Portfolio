import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <section id="project-wrapper">
            <h2 className="project-title">
                My Projects
            </h2>
            <div className="project-box">
                <figure className="project">
                    <img src={require('../../assets/imgs/kodflix.jpg')} alt="kodflix"/>
                    <div className="img-overlay"></div>
                    <figcaption><strong>Kodflix</strong></figcaption> 
                    <a href="https://github.com/justinliu6165/kodflix" className="source-code">View Source Code</a>
                </figure>
                <figure className="project">
                    <img src={require('../../assets/imgs/citygem.jpg')} alt="citygem"/>
                    <div className="img-overlay"></div>
                    <figcaption><strong>CityGem</strong></figcaption> 
                    <a href="https://github.com/justinliu6165/citygem" className="source-code">View Source Code</a>
                </figure>
                <figure className="project">
                    <img src={require('../../assets/imgs/rgbgame.jpg')} alt="rgb game"/>
                    <div className="img-overlay"></div>
                    <figcaption><strong>RGB Game</strong></figcaption> 
                    <a href="https://github.com/justinliu6165/RGB-Game" className="source-code">View Source Code</a>                
                </figure>
                <figure className="project">
                    <img src={require('../../assets/imgs/patatat.jpg')} alt="Patatat"/>
                    <div className="img-overlay"></div>
                    <figcaption><strong>Patatat</strong></figcaption> 
                    <a href="https://github.com/justinliu6165/patatat" className="source-code">View Source Code</a>                
                </figure>
            </div>
        </section>
    )
}