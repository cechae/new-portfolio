import React from 'react';

import './style.css';

import Footer from './Footer';
import About from './About';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Works from './Works';


function App() {
  return (
    <div className="App">
      <About />
      <AboutMe />
      <Works />
      <Footer />

    </div>
  );
}

export default App;
