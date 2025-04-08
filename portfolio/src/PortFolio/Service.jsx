import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaServer, FaSearch, FaRocket } from 'react-icons/fa';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS",
      icon: <FaCode className="text-4xl mb-4 text-[#66ffcc]" />,
      tech: ["React", "Next.js", "JavaScript", "TypeScript"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed for optimal user experience and engagement",
      icon: <FaPalette className="text-4xl mb-4 text-[#66ffcc]" />,
      tech: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native performance",
      icon: <FaMobileAlt className="text-4xl mb-4 text-[#66ffcc]" />,
      tech: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and APIs",
      icon: <FaServer className="text-4xl mb-4 text-[#66ffcc]" />,
      tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      title: "SEO Optimization",
      description: "Increased visibility and organic traffic through technical and content SEO",
      icon: <FaSearch className="text-4xl mb-4 text-[#66ffcc]" />,
      tech: ["Keyword Research", "Technical SEO", "Analytics", "Content Strategy"]
    },
    {
      title: "E commerce Websites",
      description: "Full-featured e-commerce solutions with payment integration and user management",
      // description: "Lightning-fast applications with optimized load times and smooth interactions",
      icon: <FaRocket className="text-4xl mb-4 text-[#66ffcc]" />,
      tech: ["Lighthouse", "Bundle Optimization", "Caching", "CDN"]
    }
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

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 20px 40px -10px rgba(102, 255, 204, 0.2)",
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <motion.div 
      className="bg-[#0a0c10] text-[#e8f9f3] py-10 md:py-20 overflow-hidden relative"
      id="services-page"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      ref={ref}
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#66ffcc]/10 blur-xl"
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
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#b3ff66]/10 blur-xl"
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

      <div className="container mx-auto px-4 w-[95%] lg:w-[85%] relative z-10">
        <motion.h2 
          className="text-4xl lg:text-6xl font-sans font-normal text-left mb-4"
          variants={item}
        >
          Services <span className="text-[#66ffcc]">Provided</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-[#cbd5e1] mb-16 max-w-3xl"
          variants={item}
        >
          Comprehensive solutions tailored to your digital needs, from concept to deployment
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={item}
              whileHover={cardHover}
            >
              {/* Service card */}
              <div className="relative z-10 h-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-8 shadow-2xl overflow-hidden border border-[#66ffcc]/20 transition-all duration-300 group-hover:border-[#66ffcc]/50">
                <div className="flex flex-col h-full">
                  {service.icon}
                  <h3 className="text-2xl font-semibold mb-4 text-[#e8f9f3]">{service.title}</h3>
                  <p className="text-[#cbd5e1] mb-6 flex-grow">{service.description}</p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
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
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 z-0" />
              <div className="absolute -inset-px rounded-xl border border-[#66ffcc]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;