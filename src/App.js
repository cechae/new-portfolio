import React from 'react';

import './style.css';

import Footer from './Footer';
import About from './About';
import AboutMe from './AboutMe';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
      <About />
      <AboutMe />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
