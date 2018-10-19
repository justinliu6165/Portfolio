import React, { Component } from 'react';
import './NavBar.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    btnHandler() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        const { isOpen } = this.state;

        return (
            <nav>
                <div className={`logo-name ${isOpen ? 'open' : ''}`}><span>Justin</span> <span className="surname">Liu</span></div>
                <div className={`overlay-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="navbar-wrapper">
                    <AnchorLink href='#header-wrapper'><li className="nav-item" onClick={() => this.btnHandler()}>Home</li></AnchorLink>
                    <AnchorLink href='#about-wrapper'><li className="nav-item" onClick={() => this.btnHandler()}>About</li></AnchorLink>
                    <AnchorLink href='#project-wrapper'><li className="nav-item" onClick={() => this.btnHandler()}>Project</li></AnchorLink>
                    <AnchorLink href='#contact-target'><li className="nav-item" onClick={() => this.btnHandler()}>Contact</li></AnchorLink>
                    </ul>
                </div>
                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={() => this.btnHandler()}>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="desktop-navbar">
                    <ul className="navbar-wrapper-expand">
                        <AnchorLink href='#header-wrapper'><li className="nav-item-expand">Home</li></AnchorLink>
                        <AnchorLink href='#about-wrapper'><li className="nav-item-expand">About</li></AnchorLink>
                        <AnchorLink href='#project-wrapper'><li className="nav-item-expand">Project</li></AnchorLink>
                        <AnchorLink href='#contact-target'><li className="nav-item-expand">Contact</li></AnchorLink>
                    </ul>
                </div>
            </nav>
        )
    }
} 