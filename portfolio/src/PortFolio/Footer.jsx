import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-[#0a0c10] text-[#e8f9f3] py-12 border-t border-[#1e293b]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 w-[95%] lg:w-[85%]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Branding */}
          <motion.div 
            className="mb-6 md:mb-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center">
              {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-10 h-10 mr-3" /> */}
              <span className="text-2xl font-bold italic">Vaishali Vaidya</span>
            </div>
            <p className="text-[#94a3b8] mt-2">Full Stack Developer</p>
          </motion.div>

          {/* Middle Section - Navigation */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
                <motion.li 
                  key={item === "/" ? '/' : item}
                  onClick={() => {
                    if (item.toLowerCase() === 'home') {
                      window.scroll(0, 0);
                    }
                  }}
                  whileHover={{ y: -3, color: '#66ffcc' }}
                  transition={{ duration: 0.3 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}-page`} 
                    className="text-lg hover:text-[#66ffcc] transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Section - Social Links */}
          <div className="flex space-x-6">
            {[
              { icon: <FaGithub size={20} />, url: 'https://github.com/vaidyavaishali' },
              { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/vaishali-vaidya' },
              { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
              { icon: <FaEnvelope size={20} />, url: 'mailto:vaidyavaishali214@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#66ffcc] transition-colors"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e293b] my-8"></div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#94a3b8] text-sm">
          <p>© {currentYear} Vaishali Vaidya. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <motion.a
              href="#"
              className="hover:text-[#66ffcc] transition-colors"
              whileHover={{ x: 5 }}
            >
              Privacy Policy
            </motion.a>
            <span className="mx-4">•</span>
            <motion.a
              href="#"
              className="hover:text-[#66ffcc] transition-colors"
              whileHover={{ x: 5 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[#66ffcc]/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.footer>
  );
};

export default Footer;