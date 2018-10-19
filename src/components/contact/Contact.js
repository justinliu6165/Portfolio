import React from 'react';
import './Contact.css';

export default function Contacts() {
    return (
        <footer id="contact-wrapper">
            <div className="contact-border">
                <h2 className="contact-message">Let's have a chat</h2>
                <p>Look for me on social media</p>
                <ul className="social-media">
                    <a href="https://www.facebook.com/justin.liu.587"><li><img src={require('../../assets/icons/facebook.svg')} alt="facebook" /></li></a>
                    <a href="https://www.instagram.com/justinliu06/"><li><img src={require('../../assets/icons/instagram.svg')} alt="instagram" /></li></a>
                    <a href="https://www.linkedin.com/in/justin-liu-42618b121/"><li><img src={require('../../assets/icons/linkedin.svg')} alt="linkedin" /></li></a>
                    <a href="https://github.com/justinliu6165"><li><img src={require('../../assets/icons/github.svg')} alt="github" /></li></a>
                </ul>
                <div className="email">Or send me an email at: <strong>justin_liu@hotmail.co.uk</strong></div>
            </div>
        </footer>
    )
}