import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import pdf from '../assets/VaishaliVaidyaResume.pdf';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const Connect_with_Me = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully", )
    swal({
      title: "Thank You!",
      text: "I will get back to you soon.",
      // icon: "success",
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "swal-confirm-btn",
          closeModal: true
        }
      },
      className: "swal-dark-theme",
      customClass: {
        popup: 'swal-small-popup',
        title: 'swal-title',
        // content: 'swal-text',
        confirmButton: 'swal-confirm-btn'
      }
    });
    
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: "0 20px 40px -10px rgba(102, 255, 204, 0.2)",
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <motion.div 
      className="w-full bg-gradient-to-b from-[#0a0c10] to-[#0f172a] py-5"
      id='contact-page'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      ref={ref}
    >

      <div className='w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto px-6'>
        {/* Left Section */}
        <motion.div 
          className="relative z-10 rounded-xl p-8 flex flex-col gap-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#66ffcc]/20 shadow-2xl"
          variants={item}
          whileHover={cardHover}
        >
          {/* Decorative elements */}
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10" />
          <div className="absolute -inset-px rounded-xl border border-[#66ffcc]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <motion.h3 
            className="text-4xl font-bold font-serif leading-10 bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] bg-clip-text text-transparent"
            variants={item}
          >
            Let's Create Together
          </motion.h3>
          
          <motion.p 
            className="text-[#cbd5e1] text-lg"
            variants={item}
          >
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </motion.p>
          
          <motion.div 
            className="mt-2"
            variants={item}
          >
            <p className="text-[#94a3b8]">Email me at:</p>
            <a 
              href="mailto:vaidyavaishali214@gmail.com" 
              className="text-xl text-[#66ffcc] hover:text-[#b3ff66] transition-colors"
            >
              vaidyavaishali214@gmail.com
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6 mt-6"
            variants={item}
          >
            {/* GitHub */}
            <motion.a 
              href="https://github.com/vaidyavaishali" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <FontAwesomeIcon 
                icon={faGithub} 
                size="2x" 
                className="text-[#e8f9f3] group-hover:text-[#66ffcc] transition-colors" 
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </motion.a>
            
            {/* LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/in/vaishali-vaidya-1a107b295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                size="2x" 
                className="text-[#e8f9f3] group-hover:text-[#66ffcc] transition-colors" 
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </motion.a>
            
            {/* Resume */}
            <motion.a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2 px-4 py-2 bg-[#66ffcc]/10 rounded-lg hover:bg-[#66ffcc] hover:text-[#0a0c10] transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={faFileAlt} size="lg" />
              <span>View Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="relative z-10 rounded-xl p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#66ffcc]/20 shadow-2xl"
          variants={item}
          whileHover={cardHover}
        >
          {/* Decorative elements */}
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10" />
          <div className="absolute -inset-px rounded-xl border border-[#66ffcc]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <motion.h3 
            className="text-4xl font-bold text-center font-serif mb-8 bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] bg-clip-text text-transparent"
            variants={item}
          >
            Send Me a Message
          </motion.h3>
          
          <motion.form 
            className="space-y-6"
            variants={container}
          >
            {[
              { name: 'name', placeholder: 'Full Name', type: 'text' },
              { name: 'email', placeholder: 'Email Address', type: 'email' },
              { name: 'phone', placeholder: 'Phone Number', type: 'text' },
              { name: 'subject', placeholder: 'Subject', type: 'text' }
            ].map((field, i) => (
              <motion.div key={i} variants={item}>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="block w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#66ffcc] border border-[#334155] transition-all"
                />
              </motion.div>
            ))}
            
            <motion.div variants={item}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your project"
                rows="4"
                className="block w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#66ffcc] border border-[#334155] transition-all"
              />
            </motion.div>
            
            <motion.div variants={item}>
              <motion.button
                type="submit"
                onClick={handlesubmit}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] text-[#0a0c10] font-medium rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#66ffcc] focus:ring-offset-2 focus:ring-offset-[#0f172a] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Send Message</span>
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <AnimatePresence>
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-[#66ffcc]/10 blur-xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#b3ff66]/10 blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default Connect_with_Me;