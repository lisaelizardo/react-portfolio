import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
//import Portfolio from './components/Portfolio';
// import Cards from './components/Cards';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      {/* <Cards /> */}
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
