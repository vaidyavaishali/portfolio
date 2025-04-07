import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../src/assets/newLogo.png';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeNav, setActiveNav] = useState('#home-page');

  // Sections to track
  const sections = ['#home-page', '#about-page', '#skills-page', '#my-work-page', '#contact-page'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 0); // Adjust transparency on scroll

      // Check which section is in view
      sections.forEach((section) => {
        const sectionElement = document.querySelector(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop - 80; // Adjust offset for sticky navbar height
          const offsetBottom = offsetTop + sectionElement.offsetHeight;
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            setActiveNav(section); // Set active nav link based on section in view
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`px-0 md:px-3 py-2 box-border lg:py-0 lg:px-[80px] bg-[black] sticky top-0 z-10 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-70'}`}>
      <div className='max-w-[1280px]  px-8 py-[12px] box-border mx-auto flex justify-between items-center'>
        <div className='text-3xl box-border text-white h-[]'>
          <span className='text-3xl ms-20px mt-20px  font-bold flex '>
            <img src={logo} alt="" width="40px" height="40px" />
            <span className='mt-3 italic ms-[-10px]'>aishali</span> 
          </span>
        </div>
        {toggle ? (
          <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
        ) : (
          <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
        )}
        <ul className='md:flex hidden  text-white gap-x-10'>
          <a href="#home-page">
            <li className={`px-8 py-4 nav-link ${activeNav === '#home-page' ? 'active' : ''}`}>Home</li>
          </a>
          <a href="#about-page">
            <li className={`px-10 py-4 nav-link ${activeNav === '#about-page' ? 'active' : ''}`}>About</li>
          </a>
          <a href="#skills-page">
            <li className={`px-10 py-4 nav-link ${activeNav === '#skills-page' ? 'active' : ''}`}>Skills</li>
          </a>
          <a href="#my-work-page">
            <li className={`px-10 py-4 nav-link ${activeNav === '#my-work-page' ? 'active' : ''}`}>Portfolio</li>
          </a>
          <a href="#contact-page">
            <li className={`px-10 py-4 nav-link ${activeNav === '#contact-page' ? 'active' : ''}`}>Contact</li>
          </a>
        </ul>
        {/* Responsive Menu */}
        <ul className={`duration-500 box-border md:hidden w-[100%] h-screen text-white fixed bg-black top-[80px] ${toggle ? 'left-0' : '-left-[200%]'}`}>
          <li className={`p-5 nav-link box-border ${activeNav === '#home-page' ? 'active' : ''}`} onClick={() => { setActiveNav('#home-page'); setToggle(false); }}>Home</li>
          <li className={`p-5 nav-link box-border ${activeNav === '#about-page' ? 'active' : ''}`} onClick={() => { setActiveNav('#about-page'); setToggle(false); }}>About</li>
          <li className={`p-5 nav-link box-border ${activeNav === '#skills-page' ? 'active' : ''}`} onClick={() => { setActiveNav('#skills-page'); setToggle(false); }}>Skills</li>
          <li className={`p-5 nav-link box-border ${activeNav === '#my-work-page' ? 'active' : ''}`} onClick={() => { setActiveNav('#my-work-page'); setToggle(false); }}>Portfolio</li>
          <li className={`p-5 nav-link box-border ${activeNav === '#contact-page' ? 'active' : ''}`} onClick={() => { setActiveNav('#contact-page'); setToggle(false); }}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
