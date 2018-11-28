import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/aboutMe/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-content">
          <NavBar />
          <Header />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
