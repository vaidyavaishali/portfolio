import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import MyWork from './MyWork.jsx';
import Skills from './Skills.jsx';
import Connect_with_Me from './Connect_with_Me.jsx';
import ServicesSection from './Service.jsx';
import Footer from './Footer.jsx';

const MainPortFolio = () => {
  return (
    <div className='w-screen bg-gray-800'> {/* Using Tailwind classes */}
    {/* <div></div> */}
      <NavBar />
      <Home/>
      <About id='about-page'/>
      <Skills/>
      {/* <MyWork/> */}
      <ServicesSection/>
      <Connect_with_Me/>
      <Footer/>
    </div>
  );
}

export default MainPortFolio;
