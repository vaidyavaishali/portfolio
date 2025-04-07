import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import edtech from '../assets/futuristic-portrait-young-girl-with-high-tech.jpg';
import ct from '../assets/empty-town-square.jpg';
import flyaway from '../assets/construction-building-architecture-concept.jpg';
import Aviator from '../assets/aviator.png';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const projects = [
    {
      title: "Techmomentum Website",
      description: "Developed Interactive SEO-friendly Edtech Website With CMS",
      link: "https://techmomentum.in",
      image: edtech,
      tech: ["React", "Node.js", "MongoDB", "Tailwind"]
    },
    {
      title: "Conscientious Technology Website",
      description: "Developed Responsive UI With CMS for managing Content",
      link: "https://conscientioustech.in",
      image: ct,
      tech: ["Next.js", "Sanity CMS", "Framer Motion"]
    },
    {
      title: "Flyaway Airport Parking",
      description: "Airport Car Parking Management System Web App",
      link: "https://demoairportparking.netlify.app",
      image: flyaway,
      tech: ["React", "Firebase", "Stripe", "Mapbox"]
    },
    // {
    //   title: "Aviator Game",
    //   description: "Airport Car Parking Management System Web App",
    //   link: "https://demoairportparking.netlify.app/booking",
    //   image: Aviator,
    //   tech: ["React", "Firebase", "Stripe", "Mapbox"]
    // },
  ];

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

  const imageHover = {
    scale: 1.03,
    boxShadow: "0 20px 40px -10px rgba(102, 255, 204, 0.3)",
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <motion.div 
      className="bg-[#0a0c10] text-white pt-5 md:pt-20 pb-10 overflow-hidden"
      id="my-work-page"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      ref={ref}
    >
      <div className="container mx-auto px-4 w-[95%] lg:w-[85%]">
        <motion.h2 
          className="text-4xl lg:text-6xl font-sans font-normal text-left mb-16"
          variants={item}
        >
          My <span className="text-[#66ffcc]">Best</span> Work
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {/* Project card */}
              <div className="relative z-10 h-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl shadow-2xl overflow-hidden border border-[#66ffcc]/20 transition-all duration-300 group-hover:border-[#66ffcc]/50">
                {/* Image container */}
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  whileHover="hover"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                    variants={imageHover}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
                
                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-semibold mb-3 text-[#e8f9f3]"
                    whileHover={{ color: "#66ffcc" }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-[#cbd5e1] mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-[#66ffcc]/10 rounded-full text-sm text-[#66ffcc]"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "#66ffcc",
                          color: "#0a0c10"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#66ffcc] hover:text-[#b3ff66] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 z-0" />
              <div className="absolute -inset-px rounded-xl border border-[#66ffcc]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#66ffcc]/10 blur-xl"
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
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-[#b3ff66]/10 blur-xl"
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
    </motion.div>
  );
};

export default PortfolioSection;