import React from 'react';
import './About.css';

export default function About() {
    return (
        <section id="about-wrapper">
            <div className="profile-wrapper">
                <img src={require('../../assets/imgs/profile.jpg')} alt="Justin Liu" />
            </div>
            <div className="description-wrapper">
                <h2 className="about-title">A little bit about me...</h2>
                <div className="description">
                    <p>I am a <strong>Web Developer</strong> based in London, United Kingdom. I am passionate about coding
                and developing fun and exciting things.</p>
                    <p>I am aspiring to move from a hobbyist to breaking into the tech market.
                I love learning new langauges, playing with them, and seeing what they can do.</p>
                    <p> My other hobbies include Hiking, Snowboarding and Travelling.</p>
                </div>
            </div>
        </section>
    )
}