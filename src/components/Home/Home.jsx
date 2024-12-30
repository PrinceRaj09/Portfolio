import React from 'react';
import './home.css';
import Social from './Social.jsx';
import Data from './Data.jsx'
import ScrollDown from './ScrollDown.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Services from '../Services/Services.jsx';
import Education from '../Education/Education.jsx';
import Work from '../Work/Work.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';




const Home = () => {
  return (
    <section className='home-section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />

          <div className="home__img"></div>

          <Data />
          
        </div>
        <ScrollDown />
      </div> 

    <main className='main'>
      <About />
      <Skills />
      <Services />
      <Education />
      <Work />
      <Contact />
      <Footer />
      {/* <ScrollUp /> */}
    </main>
     

    </section>
  )
}

export default Home